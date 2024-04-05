import {TracingBeams} from '../../ui/tracingBeam/TracingBeam'
const PartnerShip = () => {
  const Companies = [
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/aws-partner.svg",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mongodb-partner.svg",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-cloud-partner.svg",
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/cloudinary-partner.svg",
  ];
  return (
    <>
    <div className="flex flex-wrap  sm:flex-nowrap gap-3 mx-3 md:mx-12">
      <div className="sm:w-2/3 w-full flex justify-center items-center">
        <p className="dark:text-white font-bold text-3xl sm:text-4xl md:text-6xl">
          Strategic Partnerships to Unlock Greater Business Value
        </p>
      </div>
      <div className="sm:w-1/3 w-full grid grid-cols-2 gap-2">
        {Companies.map((imgUr) => (
          <div className=" p-12 border bg-zinc-950 rounded-md flex  flex-col items-center justify-center">
            <img src={imgUr} alt="" />
          </div>
        ))}
      </div>
     
    </div>
    <TracingBeams/>
    </>
  );
};

export default PartnerShip;
