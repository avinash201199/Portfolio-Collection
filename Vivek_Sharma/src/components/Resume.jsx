import resumePdf from '../assets/Vivek_Kumar_Resume.pdf';

const Resume = () => {
  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-y-auto h-[90vh] w-3/4 max-w-4xl">
        <iframe
          src={resumePdf}
          title="Resume"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
