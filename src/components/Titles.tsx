interface Props {
  text: string;
  customClass?: string;
}
const Titles = ({ text, customClass }: Props) => {
  return (
    <h2
      className={`font-semibold text-[35px] tracking-[-3%] leading-[130%] text-left lg:text-[48px] ${customClass}`}
    >
      {text}
    </h2>
  );
};

export default Titles;
