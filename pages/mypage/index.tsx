import React, { useEffect, useState } from 'react';
import { Layout, MyPageLayout } from 'layouts';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/reducer';
import { ArtistLoader, ContentLoader, PathContentLoader } from '@containers';
import { Avatar } from '@components';

const MyPage = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean | null>(null);
  const [viewWidth, setViewWidth] = useState<number | undefined>(undefined);
  const { follows, paths, userProfile, bookmarks, contents } = useSelector(
    ({ user }: RootState) => user
  );

  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    console.dir(router);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setViewWidth(window.innerWidth);

    if (viewWidth && viewWidth > 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [viewWidth]);

  return (
    <Layout title={`MyPage | FansSum::팬심이 모여 문화가 되다`}>
      <MyPageLayout>
        {viewWidth && showMenu ? (
          <div id="userInfoLeft">
            <Avatar
              profileImage={
                userProfile.data?.profileImage || '/images/avatar_default.jpg'
              }
              size={5}
            />
            <h3>{userProfile.data?.userName}</h3>
            <span>{userProfile.data?.email}</span>
          </div>
        ) : null}
        <main>
          {viewWidth && viewWidth <= 768 && (
            <div>
              <div id="userInfoTop">
                <Avatar profileImage="/images/avatar_default.jpg" size={3} />
                <div className="text">
                  <h2>{userProfile.data?.userName}</h2>
                  <span>{userProfile.data?.email}</span>
                </div>
              </div>
            </div>
          )}
          <section>
            <h2>
              <a id="my-artist">My Artist</a>
            </h2>
            <div className="contents">
              <ArtistLoader data={follows.data} />
            </div>
          </section>
          <section>
            <h2>
              <a id="my-route">My Route</a>
            </h2>
            <div className="contents">
              <PathContentLoader data={paths.data} />
            </div>
          </section>
          <section>
            <h2>
              <a id="my-post">My Post</a>
            </h2>
            <div className="contents">
              <ContentLoader data={contents.data} type="myContent" />
            </div>
          </section>
          <section>
            <h2>
              <a id="bookmark">Bookmark</a>
            </h2>
            <div className="contents">
              <ContentLoader data={bookmarks.data} type="bookmarks" />
            </div>
          </section>
        </main>
      </MyPageLayout>
    </Layout>
  );
};

export default MyPage;
