/** Section heading with a smooth, hand-drawn underline that draws in on scroll. */
export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="sec-title">
      <span className="sec-title-text">
        {children}
        <svg className="sketch" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M3 8 C 55 5.5, 130 4.6, 197 5.6"
            pathLength={1}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </span>
    </h2>
  );
}
