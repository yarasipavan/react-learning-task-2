import React from "react";

function Header() {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <div
            className="col-12 col-md-8 p-3"
            style={{ fontSize: "1.2rem", fontStyle: "italic" }}
          >
            <div>
              <h4> heading</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="https://westagilelabs.keka.com/files/f8e1e6a1-be7d-4bde-81e2-81b2fe7e97da/loginbackgroundimage/59cf4a8e8e364feabc0e2180a2089614.png"
              alt="logo of west agile labs"
              width="100%"
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
