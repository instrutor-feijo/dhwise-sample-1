import React from "react";

import { Button, Text } from "components";

const ListSubheader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-end justify-between w-full">
          <div className="flex flex-1 flex-row gap-4 items-center justify-start mb-0.5 md:mt-0 mt-[7px] w-full">
            <Text
              className="font-roboto text-gray_700 w-auto"
              as="h1"
              variant="h1"
            >
              {props?.title}
            </Text>
            <Text
              className="bg-gray_300 font-bold font-roboto h-[18px] justify-center px-2 rounded text-gray_700 tracking-[0.12px] w-auto"
              as="h3"
              variant="h3"
            >
              {props?.tag}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-medium font-roboto min-w-[80px] text-base text-center text-white_A700"
            shape="RoundedBorder4"
            size="lg"
            variant="FillDeeporange500"
          >
            {props?.new}
          </Button>
        </div>
      </div>
    </>
  );
};

ListSubheader.defaultProps = {
  title: "Edge Functions List",
  tag: "Tag",
  new: "New",
};

export default ListSubheader;
