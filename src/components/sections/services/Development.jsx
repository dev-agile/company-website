const ProgressBar = ({ title, percentage }) => {
  return (
    <div className="flex flex-col">
      <div className="text-gray-900 font-semibold dark:text-white">{title}</div>

      <div className="flex items-center justify-between py-2">
        <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mr-3">
          <div
            className="h-2.5 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="text-gray-600 dark:text-white">{percentage}%</div>
      </div>
    </div>
  );
};

const Development = () => {
  return (
    <>
     <h1 className="text-4xl text-center font-bold mb-4 dark:text-white">
          How You Start Web Development?
        </h1>
    <div className="sm:mx-20 mx-2 flex flex-wrap sm:flex-nowrap gap-4">
      <div className="sm:w-1/2 w-full">
       
        <p className="mb-2 text-slate-700 dark:text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley.
        </p>
        {[...Array(5)].map((_, index) => (
          <blockquote
            key={index}
            className=" pl-4 border-l-4 border-black dark:border-white my-4"
          >
            <p className="mb-3 text-slate-700 dark:text-white">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
          </blockquote>
        ))}
      </div>
      <div className="sm:w-1/2 w-full flex flex-col justify-between">
        <ProgressBar title="SEO" percentage={80} />
        <ProgressBar title="Designing" percentage={90} />
        <ProgressBar title="Development" percentage={85} />
        <ProgressBar title="Marketing" percentage={70} />
      </div>
      
    </div>
    </>
  );
};

export default Development;
