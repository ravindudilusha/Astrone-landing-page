import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Clock, Building2, ChevronDown } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollAnimation } from "../components/ScrollAnimation";
import imgHero from "../../assets/5cb88a98322dff3785d84d25be25567fe7eec54d.png";
import imgWorkspace from "../../assets/0fce5dc8e698df0884a400b492bbf0111db67d65.png";
import imgCulture from "../../assets/808ff71e4fd05987376e2bcc51359dd972bd64d7.png";

const departments = ["All Departments", "Manufacturing", "Research", "Sales", "Marketing", "Finance", "HR"];
const jobTypes = ["All Job Types", "Full Time", "Part Time", "Contract", "Internship"];

const openPositions = [
  {
    id: 1,
    title: "Senior Research Scientist",
    department: "Manufacturing",
    type: "Full Time",
    location: "Colombo, Western",
    description: "Leading pharmaceutical research projects and developing innovative healthcare solutions.",
  },
  {
    id: 2,
    title: "Medical Representative",
    department: "Sales",
    type: "Full Time",
    location: "Kandy, Western",
    description: "Building relationships with healthcare professionals and promoting pharmaceutical products.",
  },
  {
    id: 3,
    title: "Production Executive",
    department: "Manufacturing",
    type: "Full Time",
    location: "Gampaha, Western",
    description: "Overseeing production processes and ensuring quality standards are maintained.",
  },
  {
    id: 4,
    title: "Senior Research Scientist",
    department: "Research",
    type: "Full Time",
    location: "Colombo, Western",
    description: "Conducting advanced pharmaceutical research and clinical trials.",
  },
];

const workplaceValues = [
  {
    title: "Our Employees are essential to our success.",
    description:
      "We focus on enhancing their capabilities, and aim to support and empower them to be the best they can be.",
  },
  {
    title: "Astron offers its employees a dynamic and flexible work environment.",
    description:
      "Astron values the contribution of its employees as much as it values the contribution of its customers and other stakeholders.",
  },
];

type Job = typeof openPositions[0];

export function Careers() {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("All Job Types");
  const [deptOpen, setDeptOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [workSlide, setWorkSlide] = useState(0);

  const filteredJobs = openPositions.filter((job) => {
    const deptMatch = selectedDept === "All Departments" || job.department === selectedDept;
    const typeMatch = selectedType === "All Job Types" || job.type === selectedType;
    return deptMatch && typeMatch;
  });

  const handleApplyClick = (job: Job) => {
    navigate(`/careers/vacancy/${job.id}`, { state: { job } });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-3 sm:pt-4 px-3 sm:px-4 lg:px-5 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="up">
          <section className="relative h-[85vh] sm:h-[70vh] lg:h-[720px] min-h-[550px] overflow-hidden rounded-[20px] sm:rounded-[30px] mb-8 flex flex-col">
            <img
              src={imgHero}
              alt="Careers at Astron"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/40 to-transparent sm:from-black/60 sm:via-black/30 rounded-[20px] sm:rounded-[30px]" />

            {/* Navbar Overlay */}
            <Navbar />

            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 hidden sm:block">
              <span className="text-white/70 text-sm">| Careers</span>
            </div>

            <div className="relative z-10 flex flex-col justify-end flex-1 px-5 sm:px-8 lg:px-16 pb-12 sm:pb-16 lg:pb-32">
              <div className="max-w-xl">
                <h1 className="text-white text-[40px] sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6">
                  Build a Career<br />with Purpose
                </h1>
                <p className="text-white/80 text-[14px] sm:text-sm leading-relaxed max-w-md mb-4 sm:mb-8">
                  Join our team and be a part of Sri Lanka's pioneering pharmaceutical company, contributing to life-changing healthcare innovations.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>

      {/* Let's Grow Together */}
      <section className="py-24 px-8 overflow-hidden">
        <ScrollAnimation delay={0.1} direction="down" className="max-w-[1400px] mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2e2e2e] tracking-tight">
            Let's Grow <span className="text-[#777]">Together</span>
          </h2>
        </ScrollAnimation>

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <ScrollAnimation delay={0.2} direction="right" className="lg:w-1/2 space-y-8">
            <p className="text-xs font-semibold text-[#2e2e2e] uppercase tracking-widest">Our Workplace</p>
            {workplaceValues.map((value, index) => (
              <div key={index} className={`${index > 0 ? "border-t border-gray-100 pt-8" : ""}`}>
                <h3 className="text-2xl font-bold text-[#2e2e2e] tracking-tight mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}

            {/* Slide nav dots */}
            <div className="flex gap-3 items-center">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setWorkSlide(i)}
                  className={`rounded-full transition-all ${
                    workSlide === i ? "w-8 h-3 bg-[#005400]" : "w-3 h-3 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3} direction="left" className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden h-96">
              <img
                src={imgWorkspace}
                alt="Our workplace"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Ready To Build Together CTA */}
      <section className="py-20 px-8 bg-[#005400] overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8">
            Ready To Build<br />Together ?
          </h2>
        </ScrollAnimation>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <ScrollAnimation delay={0.1} direction="up" className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold text-[#2e2e2e] uppercase tracking-widest mb-2">Hiring Now</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2e2e2e] tracking-tight">
                Here is the Open<br />Positions
              </h2>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {/* Department dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 border-2 border-[#d3d3d3] rounded-[12px] px-5 py-2.5 text-sm text-[#2e2e2e] bg-white hover:border-[#005400] transition-colors"
                  onClick={() => { setDeptOpen(!deptOpen); setTypeOpen(false); }}
                >
                  {selectedDept}
                  <ChevronDown size={16} />
                </button>
                {deptOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-10 min-w-[180px]">
                    {departments.map((dept) => (
                      <button
                        key={dept}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-green-50 hover:text-[#005400] ${
                          selectedDept === dept ? "text-[#005400] font-semibold" : "text-gray-700"
                        }`}
                        onClick={() => { setSelectedDept(dept); setDeptOpen(false); }}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Job type dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 border-2 border-[#d3d3d3] rounded-[12px] px-5 py-2.5 text-sm text-[#2e2e2e] bg-white hover:border-[#005400] transition-colors"
                  onClick={() => { setTypeOpen(!typeOpen); setDeptOpen(false); }}
                >
                  {selectedType}
                  <ChevronDown size={16} />
                </button>
                {typeOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-10 min-w-[160px]">
                    {jobTypes.map((type) => (
                      <button
                        key={type}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-green-50 hover:text-[#005400] ${
                          selectedType === type ? "text-[#005400] font-semibold" : "text-gray-700"
                        }`}
                        onClick={() => { setSelectedType(type); setTypeOpen(false); }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>

          {/* Job listings */}
          <ScrollAnimation delay={0.2} direction="up" className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="border-2 border-[#d3d3d3] rounded-[20px] px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#005400]/30 hover:shadow-sm transition-all"
              >
                <div>
                  <h3 className="text-[20px] font-bold text-[#2e2e2e] mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Building2 size={13} className="text-[#005400]" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#005400]" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#005400]" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleApplyClick(job)}
                  className="flex-shrink-0 bg-white border-2 border-[#005400] text-[#005400] font-semibold px-8 py-2.5 rounded-[999px] text-sm hover:bg-[#005400] hover:text-white transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <p className="text-lg">No positions found for the selected filters.</p>
              </div>
            )}
          </ScrollAnimation>
        </div>
      </section>

      {/* Work Culture */}
      <section className="py-24 px-8 bg-gray-50/50 overflow-hidden">
        <ScrollAnimation delay={0.2} direction="up" className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2e2e2e] tracking-tight mb-4">
              Our Work <span className="text-[#777]">Culture</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
              Astron's culture encourages diversity and innovation. It is a people-centric organization that strives for excellence by continuously improving the quality of its products/services while maintaining the work-life balance of its employees.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
            <img
              src={imgCulture}
              alt="Our Work Culture"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
}
