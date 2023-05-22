import React from "react";

import { Button, Img, Text } from "components";

const ListHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-4 h-12 md:h-auto items-center justify-start">
          <Button
            className="flex h-10 items-center justify-center w-10"
            shape="icbRoundedBorder4"
            size="mdIcn"
          >
            <Img src="images/img_menu.svg" className="h-6" alt="menu" />
          </Button>
          <Img
            src="images/img_videocamera.svg"
            className="h-11 w-[82px]"
            alt="videocamera"
          />
        </div>
        <div className="flex flex-row gap-4 h-12 md:h-auto items-center justify-end">
          <div className="bg-gray_900 border-2 border-gray_600 border-solid flex flex-row gap-2 h-8 md:h-auto items-center justify-start px-4 rounded-[16px] w-auto">
            <div className="bg-light_green_500 h-2.5 rounded-[50%] w-2.5"></div>
            <Text
              className="font-medium font-roboto text-white_A700 tracking-[0.96px] w-auto"
              as="h3"
              variant="h3"
            >
              {props?.language}
            </Text>
          </div>
          <Img
            src="images/img_helpiconbutton.svg"
            className="h-10 w-10"
            alt="helpiconbutton"
          />
          <div className="flex flex-row gap-2 items-center justify-end p-2 w-auto">
            <Img
              src="images/img_arrowdown.svg"
              className="h-5 w-5"
              alt="arrowdown"
            />
            <div className="flex flex-col items-start justify-start w-8">
              <Img
                src="images/img_img.png"
                className="h-8 md:h-auto object-cover rounded-bl rounded-br w-8"
                alt="img"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

ListHeader.defaultProps = { language: "All System Operational  " };

export default ListHeader;
