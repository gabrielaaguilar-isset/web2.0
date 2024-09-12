interface Props{
    text: string;
    customClass?: string;
}
export const Subtitles = ({text, customClass}:Props) => {
  return (
    <h4 className={` font-medium text-[17px]  ${customClass}`}>{text}</h4>
  )
}
