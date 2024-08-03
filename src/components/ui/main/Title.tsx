interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <h1 className="text-lg lg:text-5xl text-start font-normal border-b border-[#ecc27d] text-[#ecc27d] mb-10 pb-2">
      {title}
    </h1>
  );
};
