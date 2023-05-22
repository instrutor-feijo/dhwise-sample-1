import React from "react";

import { Button, Img } from "components";

const ListCall = (props) => {
  return (
    <>
      <Button
        className={props.className}
        shape="icbRoundedBorder4"
        size="smIcn"
        variant="icbFillAmber400"
      >
        <Img src="images/img_call.svg" alt="call" />
      </Button>
    </>
  );
};

ListCall.defaultProps = {};

export default ListCall;
