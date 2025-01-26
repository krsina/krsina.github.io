const Contact = () => {
  return (
    <div className="flex items-center justify-center md:justify-start space-y-0 space-x-2 mb-8">
      <a href="resume.pdf">
        <div className="flex rounded-md items-center justify-center border border-black bg-black h-7 w-20 text-black">
          <img className="w-4 mr-1 invert" src="file.svg" alt="File Icon" />
          <p className="text-xs text-custom-color font-inter font-medium">
            Resume
          </p>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/krisnaoeurn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-8 rounded-md drop-shadow-lg"
          src="linkedin.svg"
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://github.com/krsina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="h-8 drop-shadow-lg" src="github.svg" alt="GitHub" />
      </a>
    </div>
  );
};

export default Contact;
