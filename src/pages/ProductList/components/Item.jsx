import React, { useState } from "react";

function Item(props) {
  const [isSelected, setIsSelected] = useState(false);

  // Syntax của react: khi return chỉ được tồn tại duy nhất 1 div ở ngoài lớn nhất. ta xử lý bằng cách thêm cặp dấu <> </> để đặt 2 div cùng cấp
  return (
    <div className="item-wrapper">
      <div
        className="item-container"
        style={{
          backgroundColor: isSelected ? "yellow" : "#b5f5ec",
        }}
      >
        {props.isNew && <div className="new">NEW!</div>}
        {/* Dòng trên bằng ý nghĩa với dòng dưới, được sử dụng khi không cần dùng vế sau dấu :
        {props.isNew ? <div className="new">New!</div> : null}*/}

        <div>{props.name}</div>
        <div>{props.price}đ</div>
        <button className="button" onClick={() => setIsSelected(!isSelected)}>
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}

export default Item;
