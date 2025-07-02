interface Props {
  scale?: number;
  color?: string;
  className?: string;
}

export const LoaderDots = ({
  scale = 1,
  color = "#ffffff",
  className,
}: Props) => {
  return (
    <>
      <style>
        {`.loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    transform: scale(${scale})
  }
  .loader::before,
  .loader::after {    
    content:"";
    grid-area: 1/1;
    --c:no-repeat radial-gradient(farthest-side,${color} 92%,#0000);
    background: 
      var(--c) 50%  0, 
      var(--c) 50%  100%, 
      var(--c) 100% 50%, 
      var(--c) 0    50%;
    background-size: 12px 12px;
    animation: l12 1s infinite;
  }
  .loader::before {
    margin: 4px;
    background-size: 8px 8px;
    animation-timing-function: linear
  }
  
  @keyframes l12 { 
    100%{transform: rotate(.5turn)}
  }`}
      </style>
      <div className={`loader ${className}`}></div>
    </>
  );
};
