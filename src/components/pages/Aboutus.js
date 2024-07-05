import React from 'react'

export default function Aboutus() {
  return (
    <>
  {/* About 6 - Bootstrap Brain Component */}
  <section className="bsb-about-6 py-3 py-md-5 py-xl-8">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 className="mb-4 display-5 text-center">Why Choose Us</h2>
          <p className="text-secondary mb-5 text-center lead fs-4">
            Our commitment to excellence is evident in every project we
            undertake, ensuring that you receive nothing but the highest quality
            products and services.
          </p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row gy-4 gy-lg-0 align-items-lg-center">
        <div className="col-12 col-lg-6">
          <img
            className="img-fluid rounded border border-dark"
            loading="lazy"
            src="https://bootstrapbrain.com/demo/components/abouts/about-6/assets/img/about-img-1.webp"
            alt="About 6"
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className="row justify-content-xl-end">
            <div className="col-12 col-xl-11">
              <div className="accordion accordion-flush" id="accordionAbout6">
                <div className="accordion-item mb-4 border border-dark">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button bg-transparent fs-4 fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Low Price Guarantee
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionAbout6"
                  >
                    <div className="accordion-body">
                      Our Low Price Guarantee isn't just a promise; it's a
                      commitment to providing you with unbeatable value and
                      peace of mind when you shop with us. Trust us to deliver
                      quality products and services without breaking the bank.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4 border border-dark">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed bg-transparent fs-4 fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Life-Time Warranty
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionAbout6"
                  >
                    <div className="accordion-body">
                      Discover unparalleled peace of mind with our business's
                      lifetime warranty commitment. We stand behind the quality
                      and durability of our products like no other.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-4 border border-dark">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed bg-transparent fs-4 fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Genuine Spare Parts
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionAbout6"
                  >
                    <div className="accordion-body">
                      Our commitment to authenticity ensures that you receive
                      parts manufactured to the highest standards, guaranteeing
                      optimal performance and longevity for your equipment. From
                      small components to intricate pieces, we have everything
                      you need to keep your machinery running smoothly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
