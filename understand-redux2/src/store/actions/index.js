// 1. 액션을 생성하는 액션 생성 함수 정의
// action: type 속성을 가진 js object
// action function: 위의 action을 생성하는 역할을 함
// 메서드 실행 :  dispatch(action)
// 액션 생성함수 -> 액션 생성 -> reducer -> store update

// 액션 생성 함수들 : add, delete
export const addCart = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteCart = (items) => {
  return {
    type: "DELETE_ITEM",
    payload: items,
  };
};
