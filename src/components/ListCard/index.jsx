import React from "react";

import { Button, Img, Text } from "components";

const ListCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 h-full items-start justify-center p-6 sm:px-5 rounded w-full">
          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <Button
              className="flex h-6 items-center justify-center w-6"
              shape="icbRoundedBorder4"
              size="smIcn"
              variant="icbFillAmber400"
            >
              <Img src="images/img_call.svg" alt="call" />
            </Button>
            <Text
              className="flex-1 font-roboto font-semibold text-gray_900 w-auto"
              as="h2"
              variant="h2"
            >
              {props?.myedgefunction}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Text
              className="font-normal font-roboto text-gray_400 tracking-[0.12px] w-auto"
              as="h3"
              variant="h3"
            >
              {props?.language}
            </Text>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[82px] px-2"
                leftIcon={
                  <Img
                    src="images/img_icon.png"
                    className="mr-1 my-[3px]"
                    alt="icon"
                  />
                }
                shape="RoundedBorder4"
                size="sm"
                variant="FillGray300"
              >
                <div className="font-bold font-roboto text-gray_700 text-left text-xs tracking-[0.12px]">
                  {props?.bitbucket}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ListCard.defaultProps = {
  myedgefunction: "my-edge-function",
  language: "Deploys from ",
  bitbucket: "BitBucket",
};

export default ListCard;
