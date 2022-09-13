import { AccountCircle, Attachment, EmojiEmotions, FileCopy, Mic, OfflineBolt, SortByAlpha } from "@material-ui/icons";
import React from "react";
import Middlecontnav from "./Middlecontnav";

const MiddleCont = () => {
  return (
    <div className="middlecont1">
    <Middlecontnav/>
    <div className="mssg d-flex flex-row">
      <div className="profile">
      <AccountCircle/>
      </div>
      <div className="text">Hi there!can you help me? I want a red jacket</div>
    </div>
    <div className="middletext mx-3">................................................................Assign to sales team................................................................</div>
    <div className="inputcont " style={{width:"70vw"}}>
      <div class="input-group mb-3">
        <span class="input-group-text">
          <OfflineBolt/>
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span class="input-group-text">

          <FileCopy/>
        </span>
        <span class="input-group-text">
          <SortByAlpha/>
          </span>
          <span class="input-group-text">
          <EmojiEmotions/>
          </span>
          <span class="input-group-text">
          <Attachment/>
          </span>
          <span class="input-group-text">
          <Mic/>
          </span>
      </div>
    </div>
    </div>
  );
};

export default MiddleCont;
