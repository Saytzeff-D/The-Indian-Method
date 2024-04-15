const Review = ({
  name,
  label,
  desc,
}: {
  name: string
  desc?: string | JSX.Element
  label?: string
}) => {
  return (
    <div
      data-aos="zoom-in"
      className="[box-shadow:34.85px_29.63px_48.34px_0px#3366FF0D] text-center w-full min-w-[20rem] lg:min-w-[24rem] max-w-[30rem] rounded-lg mt-5 border border-[#E5F4F2] flex flex-col gap-3 items-center px-6 py-8"
    >
      <img
        src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="w-10 h-10 min-w-10 rounded-full object-cover"
      />
      <h3 className="text-lg text-dark font-semibold">{name}</h3>
      <p className="text-xs text-tsec">{label}</p>
      <div className="w-full text-tsec text-sm">{desc}</div>
      <div className="flex items-center gap-1 mt-auto">
        {[0, 1, 2, 3, 4].map(() => (
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5077 20.2404L19.3226 23.9325C20.0725 24.4055 20.9956 23.7017 20.7763 22.8364L19.0919 16.2138C19.0463 16.0302 19.0535 15.8375 19.1127 15.6579C19.1719 15.4783 19.2807 15.319 19.4264 15.1985L24.6414 10.8488C25.3222 10.2835 24.976 9.14125 24.0876 9.08356L17.2804 8.64513C17.0947 8.63432 16.9161 8.56965 16.7666 8.459C16.617 8.34836 16.5029 8.19654 16.4382 8.0221L13.8999 1.63027C13.8327 1.44556 13.7103 1.28599 13.5493 1.17324C13.3883 1.06048 13.1966 1 13 1C12.8034 1 12.6117 1.06048 12.4507 1.17324C12.2897 1.28599 12.1673 1.44556 12.1001 1.63027L9.56179 8.0221C9.4971 8.19654 9.383 8.34836 9.23343 8.459C9.08385 8.56965 8.90529 8.63432 8.71955 8.64513L1.91237 9.08356C1.02397 9.14125 0.677844 10.2835 1.35856 10.8488L6.57356 15.1985C6.71932 15.319 6.82806 15.4783 6.88726 15.6579C6.94645 15.8375 6.9537 16.0302 6.90815 16.2138L5.35057 22.3518C5.08521 23.3902 6.19282 24.2324 7.08121 23.6671L12.4923 20.2404C12.6441 20.1439 12.8202 20.0927 13 20.0927C13.1798 20.0927 13.3559 20.1439 13.5077 20.2404Z"
              fill="#F8D57E"
              stroke="#F8D57E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
    </div>
  )
}

export default Review
