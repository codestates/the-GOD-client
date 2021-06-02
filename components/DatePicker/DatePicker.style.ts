import styled from '@styles/themed-components';

export const DatePickerStyle = styled.div`
  .DayPicker_transitionContainer {
    height: fit-content;
    min-height: 330px;
  }

  /* 상단 네비게이션 화살표 스타일 */
  .DayPickerNavigation_button__default {
    border: none;
    border-radius: 999px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray.gray01};
    }
  }

  /* 오른쪽 구석의 화살표를 안보이게 한다. */
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  /* 달력 각 칸의 기본 스타일. */
  .CalendarDay__default {
    border: none;
    /* border-radius: 50%; */
    vertical-align: middle;
    outline: none;
  }

  /* 달력 각 칸에 호버가 되었을 때 스타일 */
  /* .CalendarDay__default:hover {
    background: transparent;
    border: none;
    color: black;
    box-shadow: inset 0 0 0 1px black;
  } */

  /* 체크인 체크아웃이 선택되었을 때 그 사의 날짜들에 대한 스타일 */
  /* .CalendarDay__selected_span {
    background-color: #f7f7f7;
    border: none;
    color: black;
  } */

  /* 체크인 체크아웃이 선택되었을 때 그 사의 날짜들에 호버 혹은 클릭했을 시 스타일 */
  /* .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    color: black;
    background-color: #f7f7f7;
  } */

  /* 선택된 체크인 체크아웃 날짜에 대한 스타일 */
  /* .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: black;
    border: none;
    color: white;
  } */

  /* 블록된 날짜에 대한 스타일링 */
  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: white;
    border: none;
    color: #d2d2d2;
    box-shadow: none;
    text-decoration: line-through;
  }

  /* 선택될 범위에 대한 스타일링 */
  /* .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    color: black;
    background-color: #f7f7f7;
    border: none;
  } */

  /* 요일 표시 부분에 대한 스타일. */
  .CalendarMonth_caption {
    margin-bottom: 10px;
  }
`;
