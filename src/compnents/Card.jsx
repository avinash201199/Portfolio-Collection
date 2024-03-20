import data from "../../data.json";

const Card = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="text-3xl font-weight text-center mt-3 ml-3 mr-4 rounded-md bg-red-600 text-white">Portfolio Collections</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Find best portfolio here</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black">A portfolio is a collection of work that showcases a developer's skills, projects, and accomplishments. It serves as a visual representation of their expertise, helping them stand out to potential employers or clients. Portfolios are essential for demonstrating experience, building credibility, differentiating from competitors, highlighting problem-solving skills, facilitating networking, supporting career progression, and engaging with feedback for continuous improvement. Overall, a portfolio is a powerful tool for developers to market themselves effectively in the tech industry.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.portfolio.map((item, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.screenshot} alt="content"/>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.contributor_name}</h2>
                  <p className="leading-relaxed text-base"><a href={item.source_code_link} target="_blank" rel="noopener noreferrer">Repository</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
