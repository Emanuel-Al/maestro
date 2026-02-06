import clsx from "clsx";

interface TagProps {
  status: string;
}

const Tag = ({ status }: TagProps) => {
  return (
    <div className="flex">
      <h3
        className={clsx(
          `${
            status === "WANT_TO_LEARN" &&
            "text-[#4B556C] bg-gray-200 rounded-2xl w-auto font-semibold p-2"
          } ${
            status === "LEARNING" &&
            "text-[#4863EC] bg-[#DBEAFE] rounded-2xl w-auto font-semibold p-2"
          } ${
            status === "PRACTICING" &&
            "text-[#ED5813] bg-[#FFEDD5] rounded-2xl w-auto font-semibold p-2"
          }
           ${
             status === "LEARNT" &&
             "text-[#42A34A] bg-[#DCFCE7] rounded-2xl w-auto font-semibold p-2"
           }`,
        )}
      >
        {status === `WANT_TO_LEARN` && "Quero aprender"}
        {status === `LEARNING` && "Aprendendo"}
        {status === `PRACTICING` && "Praticando"}
        {status === `LEARNT` && "Aprendida"}
      </h3>
    </div>
  );
};

export default Tag;
