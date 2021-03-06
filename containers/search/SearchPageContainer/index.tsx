import { Content } from '@interfaces';
import { Loading, NoContent } from 'containers/indicate';
import { getContentListThunk } from 'modules/content/actions/read';
import { RootState } from 'modules/reducer';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchContentLoader from '../SearchContentLoader';

const SearchPageContainer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    ({ content }: RootState) => content.list
  );

  // const [focusedID, setFocusedID] = useState<string | null>(null);
  const [isPath, setIsPath] = useState<boolean>(false);
  const [sortedList, setSortedList] = useState<{
    selectedContents: Content[];
    restContents: Content[];
  }>({ selectedContents: [], restContents: [] });
  useEffect(() => {
    if (data) {
      setSortedList({
        selectedContents: [],
        restContents: data.contents,
      });
    }
  }, [data]);
  const sortList = (id: string) => {
    // console.log('isPath : ', isPath);
    // console.log('data?.contents : ', data?.contents);

    if (!isPath && data?.contents) {
      setSortedList((state) => {
        const checkItem = state.restContents.find(
          (content) => content.id === id
        );
        if (checkItem) {
          // console.log('checkItem :', checkItem);
          // console.log('id :', id);
          // console.log(data?.contents.filter((content) => content.id !== id));
          // console.log(
          //   state?.restContents.filter((content) => content.id !== id)
          // );

          return {
            restContents: [
              ...data?.contents.filter((content) => content.id !== id),
            ],
            selectedContents: [checkItem],
          };
        } else {
          return {
            restContents: [...data?.contents],
            selectedContents: [],
          };
        }
      });
    } else {
      setSortedList((state) => {
        const checkItem = state.restContents.find(
          (content) => content.id === id
        );
        if (checkItem) {
          return {
            selectedContents: [...state.selectedContents, checkItem],
            restContents: [
              ...state.restContents.filter((content) => content.id !== id),
            ],
          };
        } else {
          const prevContent = state.selectedContents.find(
            (content) => content.id === id
          ) as Content;
          return {
            restContents: [...state.restContents, prevContent],
            selectedContents: [
              ...state.selectedContents.filter((content) => content.id !== id),
            ],
          };
        }
      });
    }
  };
  const handleCardClick = (id: string) => {
    // console.log('click ID : ', id);
    sortList(id);
  };
  const resetHadler = () => {
    setSortedList({
      selectedContents: [],
      restContents: data ? (data.contents as Content[]) : [],
    });
  };
  useMemo(() => {
    resetHadler();
  }, [isPath]);

  useEffect(() => {
    const { artistId, location, dateStart, dateEnd } = router.query;
    dispatch(
      getContentListThunk({
        artistId: artistId as string,
        location: location as string,
        dateStart: dateStart as string,
        dateEnd: dateEnd as string,
      })
    );
  }, [router.query]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);
  // TODO: ?????? ????????? ????????? 404 ????????? ?????????

  return (
    <>
      {loading ? (
        <Loading />
      ) : !data || (data?.contents && data?.contents.length === 0) ? (
        <NoContent />
      ) : (
        <SearchContentLoader
          selectedContents={sortedList.selectedContents}
          restContents={sortedList.restContents}
          isPath={isPath}
          resetHadler={resetHadler}
          setIsPath={setIsPath}
          handleCardClick={handleCardClick}
        />
      )}
    </>
  );
};

export default SearchPageContainer;
