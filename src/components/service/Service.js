import React from "react";
import "./service.css";

const Service = () => {
  return (
    <>
      <div class="accordion">
        <div class="acco row">
          <div class="col-7">
            <p class="heading">
              Sciences
              <hr />
            </p>
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      type="button"
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                    >
                      <i class="fa fa-plus"></i>
                      Accordion
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequatur, sit dignissimos! Voluptatem possimus optio,
                      reiciendis, veritatis tenetur quae ullam illum qui soluta
                      quas deserunt tempora aspernatur blanditiis? Modi,
                      explicabo asperiores. Accusamus molestiae omnis vel eos
                      repellendus? Reprehenderit fugiat impedit, totam corrupti
                      aspernatur, alias rem optio placeat ut commodi, quia
                      aliquid! Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Cum sapiente dolorem, natus qui facilis
                      sunt dolor unde odit praesentium hic. ajit is a computer
                      science portal. It is the best platform to lean
                      programming
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      type="button"
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                    >
                      <i class="fa fa-plus"></i>
                      Bootstrap
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi ullam impedit, id earum suscipit assumenda
                      architecto quaerat ipsam. Eum omnis maiores quam, facere
                      quasi excepturi odio voluptate quis perspiciatis sapiente
                      illo mollitia non minus reiciendis necessitatibus. Rem ab
                      ipsum culpa, omnis quod facere fuga, eaque maiores ad
                      provident corrupti repellat. Bootstrap is a free and
                      open-source collection of tools for creating websites and
                      web applications.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      type="button"
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                    >
                      <i class="fa fa-plus"></i>
                      HTML
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam, perferendis optio sint nihil inventore non dolor ut
                      ratione voluptas, alias ducimus a? Labore nisi eaque velit
                      optio pariatur beatae voluptatibus et, doloremque ea
                      necessitatibus illo repellat rerum iste possimus
                      voluptatum nobis esse dolorem provident molestias vero
                      itaque sapiente! Harum, repellat. HTML stands for
                      HyperText Markup Language. It is used to design web pages
                      using markup language.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4">
            <div class="ca">
              <img
                class="card-img-top"
                src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
                alt="Card image cap"
              />
            </div>

            <div class="caa">
              <img
                class="card-img-top"
                src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
