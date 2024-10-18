import Image from "next/image";

const Slider = ({ loading }) => {
  return (
    <div className="w-full mt-10">
      {loading ? (
        <div className="animate-pulse">
          <div className="bg-[var(--color-muted-day)] dark:bg-[var(--color-muted-night)] h-64 w-full"></div> {/* Skeleton Loader */}
        </div>
      ) : (
        <Image
          src="/assets/black-friday.webp"
          alt="Black Friday Promotion"
          width={2400}
          height={1600}
          className="w-full h-full object-contain p-4 transition-opacity duration-500 bg-[var(--color-background-day)] dark:bg-[var(--color-background-night)]"
          priority
          loading="eager" // Ensures image loads eagerly if important
        />
      )}
    </div>
  );
};

export default Slider;
