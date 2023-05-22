import React from "react";

import { Text } from "components";

const ListPagefooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-roboto text-gray_900 w-auto"
          as="h2"
          variant="h2"
        >
          {props?.text}
        </Text>
        <div className="flex flex-col items-start justify-start py-2 w-auto">
          <Text
            className="font-medium font-roboto text-center text-deep_orange_500 w-auto"
            as="h2"
            variant="h2"
          >
            {props?.label}
          </Text>
        </div>
      </div>
    </>
  );
};

ListPagefooter.defaultProps = {
  text: "Copyright © 2023 Azion Technologies. All Rights Reserved.",
  label: "Legal and Privacy",
};

export default ListPagefooter;
