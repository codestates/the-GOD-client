import React, { ReactElement, useState } from 'react';
import {
  Avatar,
  Badge,
  BookmarkButton,
  InfoListItem,
  PerkBadge,
  TextButton,
} from '@components';
import Carousel from 'components/Carousel';
import {
  sampleUserProfile1,
  sampleUserProfile2,
} from '../../utils/sample-data';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faCalendar,
  faClock,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  ContentPageStyle,
  ImageSection,
  InfoSection,
  Author,
  SectionStyle,
} from './ContentPageContainer.style';
import { useRouter } from 'next/dist/client/router';
import { Content } from '@interfaces';

const ContentPageContainer = ({
  artist,
  title,
  tags,
  description,
  images,
  date,
  time,
  address,
  mobile,
  perks,
  isBookmark,
  author,
}: Content): ReactElement => {
  const router = useRouter();
  const { id } = router.query;
  const handleClickEdit = () => {
    router.push(`/content/edit/${id}`);
  };

  // FIXME: store에서 유저 ID 정보를 받아와야 합니다
  const sameUserId = sampleUserProfile2.userId;
  const differentUserId = sampleUserProfile1.userId;
  const { start, end } = date;
  const { open, close } = time;
  const { storeName, roadAddress } = address;
  const { username, profileImage } = author;
  const [bookmarked, setBookmarked] = useState<boolean>(isBookmark);

  const handleContentBookmark = () => {
    setBookmarked(!bookmarked);
    // TODO: 서버에 변경요청 보내기 (endpoint: `/user/bookmark`). req.body = {"contentId":"bookmark content ID"}
  };

  return (
    <ContentPageStyle>
      <main>
        <div className="top">
          <ImageSection className="images">
            <Carousel col={1}>
              {images.map((url, idx) => (
                <div key={`image${idx}`}>
                  <img src={url} />
                </div>
              ))}
            </Carousel>
          </ImageSection>
          <InfoSection className="info">
            {sameUserId === author.userId && (
              <div id="authorOnly">
                <TextButton
                  disabled={false}
                  text={`수정하기`}
                  handler={handleClickEdit}
                />
              </div>
            )}
            <div className="head">
              <h1 className="main-title">{title}</h1>
              <div className="bookmark-button">
                <BookmarkButton
                  value={bookmarked}
                  handler={handleContentBookmark}
                />
              </div>
            </div>
            <InfoListItem icon={faHeart} title="아티스트">
              <span>{artist}</span>
            </InfoListItem>
            <InfoListItem icon={faCalendar} title="이벤트 일정">
              <span>{start}</span>
              <span>{` ~ `}</span>
              <span>{end}</span>
            </InfoListItem>
            <InfoListItem icon={faClock} title="영업 시간">
              <span>{open}</span>
              <span>{` ~ `}</span>
              <span>{close}</span>
            </InfoListItem>
            <InfoListItem icon={faMapMarkerAlt} title="위치">
              <span className="road-address">
                {roadAddress}
                {` `}
              </span>
              <span className="store-name">{storeName}</span>
            </InfoListItem>
            <InfoListItem icon={faPhoneAlt} title="연락처">
              <span>{mobile}</span>
            </InfoListItem>

            <Author className="author">
              <Avatar profileImage={profileImage} size={3} />
              <span>{username}</span>
            </Author>
          </InfoSection>
        </div>

        <SectionStyle className="description">
          <p>{description}</p>
        </SectionStyle>
        <SectionStyle className="tags">
          {tags.map((tag, idx) => (
            <Badge key={`tag${idx}`}>{tag}</Badge>
          ))}
        </SectionStyle>
        <SectionStyle className="perks">
          {Object.keys(perks).map((perk: string) => (
            <PerkBadge perk={perk} isActive={perks[perk]} key={perk} />
          ))}
        </SectionStyle>
      </main>
      <article className="comments">comments here</article>
    </ContentPageStyle>
  );
};

export default ContentPageContainer;