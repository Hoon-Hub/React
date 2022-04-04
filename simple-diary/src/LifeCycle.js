import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount");

    return () => {
      // umount 시점에 실행
      console.log("unmount");
    };
  }, []);
  return <div>Unmount Test</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>On/Off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default LifeCycle;
