import {
  Button,
  Carousel,
  Dropdown,
  DropdownTrigger,
  FileInput,
  FilePreview,
  InputTags,
  OptionList,
  TextArea,
  TextInput,
} from '@components';
import { IArtist, IGroupArtist, IMember } from '@interfaces';
import { FormStepOne } from '@layouts';
import { nullChecker } from '@utils/contentUtils';
import { getArtistThunk } from 'modules/artist';
import {
  inputArtist,
  inputDescription,
  inputImages,
  inputTags,
  inputTitle,
} from 'modules/content';
import { RootState } from 'modules/reducer';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CafeInfoForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const {
    title,
    tags,
    artist,
    description,
    images: preImages,
  } = useSelector(({ content }: RootState) => content.form);
  const { data } = useSelector(({ artist }: RootState) => artist.read);
  const [artists, setArtists] =
    useState<(IGroupArtist | IArtist | IMember)[]>();
  const [artistName, setArtistName] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [images, setImages] =
    useState<{ data: File; name: string; url: string }[]>(preImages);
  const dispatch = useDispatch();

  const tagHandler = (tags: string[]) => {
    dispatch(inputTags(tags));
  };

  useMemo(() => {
    setArtistName(artist.name);
    setDisabled(nullChecker({ title, tags, artist, description, preImages }));
  }, [title, tags, artist, description, preImages]);

  const fileListToArray = (
    file: File
  ): Promise<{ data: File; name: string; url: string }> => {
    return new Promise((resolve, _reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve({
          data: file,
          name: file.name,
          url: reader.result as string,
        });
      };
    });
  };

  const imageHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = e.target.files;
      for (let i = 0; i < fileList.length; i++) {
        const newFile = await fileListToArray(fileList[i]);
        setImages((state) => state.concat(newFile));
      }
    }
  };

  useEffect(() => {
    dispatch(getArtistThunk());
    return () => {
      setImages([]);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setArtists(data);
    }
  }, [data]);

  useMemo(() => {
    setImages(preImages);
  }, [preImages]);

  useEffect(() => {
    dispatch(inputImages(images));
  }, [images]);

  return (
    <FormStepOne className="form-step-001">
      <section className="form-artist">
        <div className="section-title">
          <h2>????????????</h2>
          <span className="section-description">
            ???????????? ???????????? ??????????????????
          </span>
        </div>
        <DropdownTrigger
          value={artistName}
          placeholder="????????? ?????? ????????? ??????????"
          onClick={() => {
            dispatch(
              inputArtist({ name: '', id: '', profileImage: '', type: 'solo' })
            );
            data && setArtists(data);
            setArtistName('');
            setIsOpen(!isOpen);
          }}
        />
        <div className="dropdown">
          <Dropdown visible={isOpen}>
            {artists && (
              <OptionList
                list={artists}
                listHandler={(key) => {
                  const selectedArtist = artists.filter(
                    (el) => el.name === key
                  )[0] as IGroupArtist;
                  if (selectedArtist && selectedArtist.type === 'group') {
                    const { member } = selectedArtist as IGroupArtist;
                    setArtists(member);
                  } else {
                    dispatch(inputArtist(selectedArtist));
                    data && setArtists(data);
                    setIsOpen(false);
                  }
                }}
                stateHandler={(key) => {
                  const selectedArtist = artists.filter(
                    (el) => el.name === key
                  )[0] as IGroupArtist;
                  setArtistName((state) => state + ' ' + selectedArtist.name);
                }}
              />
            )}
          </Dropdown>
        </div>
      </section>
      <section className="form-title">
        <div className="section-title">
          <h2>?????????</h2>
          <span className="section-description">
            ????????? ???????????? ?????????????????? (ex. "???????????? ?????? ?????? 1?????? ?????????")
          </span>
        </div>
        <TextInput
          type="text"
          value={title}
          disabled={false}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(inputTitle(value));
          }}
          placeholder='????????? ???????????? ?????????????????? (ex. "???????????? ?????? ?????? 1?????? ?????????" )'
        />
      </section>
      <section className="form-hashtags">
        <div className="section-title">
          <h2>????????????</h2>
          <span className="section-description">
            ????????? ?????????????????? (Enter?????? ????????? ????????? ????????????, ????????? ?????????
            ???????????? ????????? ??? ?????????)
          </span>
        </div>
        <InputTags tagList={tags} handler={tagHandler} />
      </section>
      <section className="form-description">
        <div className="section-title">
          <h2>????????? ??????</h2>
          <span className="section-description">
            ????????? ??????????????? ??????????????????. (ex. ????????? ?????????, ????????? ?????? ??????
            ???)
          </span>
        </div>
        <TextArea
          disabled={false}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(inputDescription(value));
          }}
          value={description}
          placeholder="????????? ??????????????? ??????????????????. (ex. ????????? ?????????, ????????? ?????? ?????? ???)"
        />
      </section>
      <section className="form-images">
        <div className="section-title">
          <h2>????????? ??????</h2>
          <span className="section-description">
            ????????? ????????? ?????? ?????? ????????? ????????? ???????????? ??? ?????????.
          </span>
        </div>
        <div className="file-input">
          <FileInput handleFileChange={imageHandler} />
        </div>
        <div className="images">
          <Carousel col={4}>
            {[
              ...images.map((image, i) => (
                <FilePreview
                  key={image.name}
                  url={image.url}
                  handleRemoveFile={() => {
                    setImages((state) => [
                      ...state.slice(0, i),
                      ...state.slice(i + 1, state.length),
                    ]);
                  }}
                />
              )),
            ]}
          </Carousel>
        </div>
      </section>
      <section>
        <Button disabled={disabled} text="??????" handler={onSubmit} />
      </section>
    </FormStepOne>
  );
};

export default CafeInfoForm;
