import React from "react";

import { getEdgeFunctions } from "service/api";

import { Button, Img, Input, Text } from "components";
import ListCall from "components/ListCall";
import ListCard from "components/ListCard";
import ListHeader from "components/ListHeader";
import ListPagefooter from "components/ListPagefooter";
import ListSubheader from "components/ListSubheader";

import { CloseSVG } from "../../assets/images";

const ListPage = () => {
  const [edgefunctions, setEdgefunctions] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  function callApi() {
    const req = {};

    getEdgeFunctions(req)
      .then((res) => {
        setEdgefunctions(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-roboto items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ListHeader className="bg-gray_900 flex items-center justify-between md:px-5 px-6 py-4 w-full" />
        <ListSubheader className="flex flex-col gap-2 items-start justify-start w-full" />
        <div className="flex flex-col gap-6 h-full items-end justify-start pl-6 pr-10 sm:px-5 py-10 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1136px] mx-auto md:px-5 w-full">
            <Input
              value={searchinputvalue}
              onChange={(e) => setSearchinputvalue(e)}
              wrapClassName="flex w-full"
              className="font-normal p-0 placeholder:text-gray_400 text-base text-gray_400 text-left w-full"
              name="searchinput"
              placeholder="Search"
              suffix={
                searchinputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer ml-[35px] my-auto"
                    onClick={() => setSearchinputvalue("")}
                    fillColor="#b2b2b2"
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                  />
                ) : (
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[35px] my-auto"
                    alt="search"
                  />
                )
              }
              shape="srcRoundedBorder4"
              size="smSrc"
              variant="srcFillGray50"
            ></Input>
          </div>
          <div className="flex flex-col h-full items-start justify-start max-w-[1136px] mx-auto sm:pr-5 md:px-5 w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-full">
              {edgefunctions?.map((edgefunctionsElement, index) => {
                return (
                  <React.Fragment key={`edgefunctionsElement${index}`}>
                    <ListCard
                      className="bg-white_A700 border border-gray_300 border-solid flex flex-1 flex-col items-start justify-start rounded w-full"
                      myedgefunction="my-edge-function"
                      language={edgefunctionsElement?.name}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="flex-wrap gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-end max-w-[1136px] mx-auto md:px-5 w-full">
            <Button
              className="cursor-pointer flex-1 font-medium h-10 leading-[normal] min-w-[40px] text-center text-sm text-white_A700 w-10"
              shape="RoundedBorder4"
              size="md"
              variant="FillDeeporange500"
            >
              1
            </Button>
            <Button
              className="cursor-pointer flex-1 font-medium h-10 leading-[normal] min-w-[40px] text-center text-sm text-white_A700 w-10"
              shape="RoundedBorder4"
              size="md"
              variant="FillGray500"
            >
              2
            </Button>
            <Button
              className="cursor-pointer flex-1 font-medium h-10 leading-[normal] min-w-[40px] text-center text-sm text-white_A700 w-10"
              shape="RoundedBorder4"
              size="md"
              variant="FillGray500"
            >
              3
            </Button>
            <Button
              className="cursor-pointer flex-1 font-medium h-10 leading-[normal] min-w-[40px] text-center text-gray_500 text-sm w-10"
              shape="RoundedBorder4"
              size="md"
              variant="OutlineGray500"
            >
              6
            </Button>
          </div>
        </div>
        <ListPagefooter
          className="bg-gray_300 flex flex-row gap-2 items-center justify-between sm:px-5 px-6 py-2 w-full"
          text="Copyright © 2023 Azion Technologies. All Rights Reserved."
        />
      </div>
    </>
  );
};

export default ListPage;
