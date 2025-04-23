import logo1 from "../assets/hospital_logo/logo1.png"
import logo2 from "../assets/hospital_logo/logo2.png"
import logo3 from "../assets/hospital_logo/logo3.png"
import logo4 from "../assets/hospital_logo/logo4.png"
import logo5 from "../assets/hospital_logo/logo5.png"
import logo6 from "../assets/hospital_logo/logo6.png"
import logo7 from "../assets/hospital_logo/logo7.png"
import logo8 from "../assets/hospital_logo/logo8.png"
import logo9 from "../assets/hospital_logo/logo9.png"
import logo10 from "../assets/hospital_logo/logo10.png"
import logo11 from "../assets/hospital_logo/logo11.png"
import logo12 from "../assets/hospital_logo/logo12.png"
import logo13 from "../assets/hospital_logo/logo13.png"
import logo14 from "../assets/hospital_logo/logo14.png"
import logo15 from "../assets/hospital_logo/logo15.png"
import logo16 from "../assets/hospital_logo/logo16.png"
import logo17 from "../assets/hospital_logo/logo17.png"
import logo18 from "../assets/hospital_logo/logo18.png"
import logo19 from "../assets/hospital_logo/logo19.png"
import maleImg from "../assets/doctor_image/Male.png"
import femaleImg from "../assets/doctor_image/female.png"

export const diseaseCount = [
    {
        id: 1,
        name: "Bulging Eyes",
        count: 50,
        system: "K"
    },
    {
        id: 2,
        name: "Crossed Eyes",
        count: 10,
        system: "L"
    },
    {
        id: 3,
        name: "Parkinson",
        count: 5,
        system: "L"
    },
    {
        id: 4,
        name: "Uveitis",
        count: 5,
        system: "L"
    },
    {
        id: 5,
        name: "Glaucoma",
        count: 110,
        system: "L"
    },
    {
        id: 6,
        name: "Cataracts",
        count: 600,
        system: "L"
    }
]

export const diseaseDescription = [
    {
        name: "Bulging_eyes",
        description: "Bulging eyes, also known as exophthalmos or proptosis, is a condition where the eyeball protrudes from the eye socket. This can be caused by various factors, including thyroid disease, tumors, or inflammation. Symptoms may include discomfort, vision changes, and difficulty closing the eyelids."
    },
    {
        name: "Crossed_Eyes",
        description: "Crossed eyes, or strabismus, is a condition where the eyes do not properly align with each other. This can lead to double vision or difficulty focusing. Treatment options include glasses, eye patches, or surgery."
    },
    {
        name: "Parkinson",
        description: "Parkinson's disease is a progressive neurological disorder that affects movement. Symptoms include tremors, stiffness, and difficulty with balance and coordination. Treatment may involve medications, physical therapy, and lifestyle changes."
    },
    {
        name: "Uveitis",
        description: "Uveitis is an inflammation of the uvea, the middle layer of the eye. It can cause redness, pain, light sensitivity, and vision changes. Treatment typically involves corticosteroids and other anti-inflammatory medications."
    },
    {
        name: "Glaucoma",
        description: "Glaucoma is a group of eye conditions that damage the optic nerve, often due to high intraocular pressure. It can lead to vision loss if not treated. Regular eye exams and medications are essential for managing glaucoma."
    },
    {
        name: "Cataracts",
        description: "Cataracts are a clouding of the eye's natural lens, leading to blurred vision and difficulty seeing at night. They are common with aging and can be treated with surgery to replace the cloudy lens with an artificial one."
    },
    {
        name: "Normal_eyes",
        description: "Normal eyes refer to healthy eyes without any visible signs of disease or abnormalities. Regular eye check-ups are important to maintain eye health and prevent potential issues."
    }
]

export const hospitalData = [
    {
        hospital_id: 1,
        hospital_logo: logo1,
        hospital_name: "Sankara Nethralaya Hospital",
        hospital_phoneno: "+91-4442271500",
        hospital_link: "https://www.sankaranethralaya.org/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Abinaya Valliappan",
                doctor_image: femaleImg,
                doctor_speciality: "Pediatric Ophthalmology and Strabismus"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Jyotirmay Biswas",
                doctor_image: femaleImg,
                doctor_speciality: "Ocular inflammation, uveitis research"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Sudha K Ganesh",
                doctor_image: maleImg,
                doctor_speciality: "Ocular inflammation, cataract surgery"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. Suchitra Pradeep",
                doctor_image: femaleImg,
                doctor_speciality: "Uveitis and Cataract Services"
            },
            {
                doctor_id: 5,
                doctor_name: "Dr. Sharanya Sarah Abraham",
                doctor_image: femaleImg,
                doctor_speciality: "Uveitis"
            },
            {
                doctor_id: 6,
                doctor_name: "Dr. Ronnie George",
                doctor_image: maleImg,
                doctor_speciality: "Glaucoma diagnosis and management"
            },
            {
                doctor_id: 7,
                doctor_name: "Dr. Lingam Vijaya",
                doctor_image: maleImg,
                doctor_speciality: "Glaucoma and cataract"
            },
            {
                doctor_id: 8,
                doctor_name: "Dr. Shantha B",
                doctor_image: femaleImg,
                doctor_speciality: "Pediatric glaucoma"
            },
            {
                doctor_id: 9,
                doctor_name: "Dr. Divya Shetty",
                doctor_image: femaleImg,
                doctor_speciality: "Glaucoma"
            },
            {
                doctor_id: 10,
                doctor_name: "Dr. Parivadhini A",
                doctor_image: femaleImg,
                doctor_speciality: "Glaucoma"
            },
        ]
    },
    {
        hospital_id: 2,
        hospital_logo: logo2,
        hospital_name: "Apollo Hospital",
        hospital_phoneno: "+91-4428290956",
        hospital_link: "https://www.apollohospitals.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Pratik Ranjan Sen",
                doctor_image: maleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Rajesh Gupta",
                doctor_image: maleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Uma Ramesh",
                doctor_image: femaleImg,
                doctor_speciality: "Pediatric Ophthalmology"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. Pratik Ranjan Sen",
                doctor_image: maleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 5,
                doctor_name: "Dr. P. Vijayashankar",
                doctor_image: maleImg,
                doctor_speciality: "Neurology"
            },
            {
                doctor_id: 6,
                doctor_name: "Dr. Geetha Lakshmipathy",
                doctor_image: femaleImg,
                doctor_speciality: "Neurology"
            },
            {
                doctor_id: 7,
                doctor_name: "Dr. Aparna Bhatnagar",
                doctor_image: femaleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 8,
                doctor_name: " Dr. Atheeswar Das",
                doctor_image: maleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 9,
                doctor_name: "Dr. Meenakshi Pande",
                doctor_image: femaleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 10,
                doctor_name: "Dr. Mary Abraham",
                doctor_image: femaleImg,
                doctor_speciality: "Ophthalmology"
            }
        ]
    },
    {
        hospital_id: 3,
        hospital_logo: logo3,
        hospital_name: "Aravind Eye Hospital",
        hospital_phoneno: "+91-4524356100",
        hospital_link: "https://aravind.org/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. P. Vijayalakshmi",
                doctor_image: femaleImg,
                doctor_speciality: "Pediatric Ophthalmology"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. R. Ramakrishnan",
                doctor_image: maleImg,
                doctor_speciality: "Retina and Vitreous"
            }
        ]
    },
    {
        hospital_id: 4,
        hospital_logo: logo4,
        hospital_name: "Vasan Eye Care",
        hospital_phoneno: "18005712222",
        hospital_link: "https://vasaneye.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Janani M",
                doctor_image: femaleImg,
                doctor_speciality: "Pediatric Ophthalmology & Strabismus"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Uma Maheshwari S",
                doctor_image: femaleImg,
                doctor_speciality: "Medical Retina & Uvea"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. R. Dhivya",
                doctor_image: femaleImg,
                doctor_speciality: "Glaucoma & General Ophthalmology"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. Preethi G",
                doctor_image: femaleImg,
                doctor_speciality: "Glaucoma & Cataract Surgery"
            },
            {
                doctor_id: 5,
                doctor_name: "Dr. Kaushik",
                doctor_image: maleImg,
                doctor_speciality: "Cataract Surgery"
            },
            {
                doctor_id: 6,
                doctor_name: "Dr. Pavan Kumar MG",
                doctor_image: maleImg,
                doctor_speciality: "Cataract & Glaucoma Surgery"
            }
        ]
    },
    {
        hospital_id: 5,
        hospital_logo: logo5,
        hospital_name: "Kumaran Eye Care",
        hospital_phoneno: "044-24839557",
        hospital_link: "https://kumaraneyecare.in/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. M. Kumaran",
                doctor_image: maleImg,
                doctor_speciality: "Orbit and Oculoplasty, Cataract, Glaucoma, Medical Retina"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. P. Kumaravel",
                doctor_image: maleImg,
                doctor_speciality: "Neuro-Ophthalmology"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Balasubramanian",
                doctor_image: maleImg,
                doctor_speciality: "Medical Retina, Uveitis"
            }
        ]
    },
    {
        hospital_id: 6,
        hospital_logo: logo6,
        hospital_name: "Gleneagles Health City",
        hospital_phoneno: "044-44777000",
        hospital_link: "https://www.gleneagleshospitals.co.in/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Ravindra Mohan E",
                doctor_image: maleImg,
                doctor_speciality: "Oculoplasty, Orbit, and Trauma Services"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Gitanjali Fernandez",
                doctor_image: maleImg,
                doctor_speciality: "Pediatric Ophthalmology and Strabismus"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Ravindra Mohan E",
                doctor_image: maleImg,
                doctor_speciality: "Neuro-Ophthalmology"
            }
        ]
    },
    {
        hospital_id: 7,
        hospital_logo: logo7,
        hospital_name: "Apollo Spectra Hospital",
        hospital_phoneno: "1-860-500-2244",
        hospital_link: "https://www.apollospectra.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Ashok Rangarajan",
                doctor_image: maleImg,
                doctor_speciality: "Oculoplasty and Orbit Disorders"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. V.C. Parthasarathy",
                doctor_image: maleImg,
                doctor_speciality: "Pediatric Ophthalmology and Squint Surgery"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Meenakshi Pande",
                doctor_image: femaleImg,
                doctor_speciality: "Neuro-Ophthalmology"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. Sapna K Mardi",
                doctor_image: femaleImg,
                doctor_speciality: "Medical Retina and Uveitis"
            },
            {
                doctor_id: 5,
                doctor_name: "Dr. Manoj Subhash Khatri",
                doctor_image: maleImg,
                doctor_speciality: "Glaucoma Management"
            },
            {
                doctor_id: 6,
                doctor_name: "Dr. Sridhar Baratan",
                doctor_image: maleImg,
                doctor_speciality: "Cataract Surgery"
            },
            {
                doctor_id: 7,
                doctor_name: "Dr. Pratik Ranjan Sen",
                doctor_image: maleImg,
                doctor_speciality: "Cataract and Refractive Surgery"
            }
        ]
    },
    {
        hospital_id: 8,
        hospital_logo: logo8,
        hospital_name: "RK Eye Centre",
        hospital_phoneno: "+91-8939941585",
        hospital_link: "https://rkeyecentre.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Rajini Kantha Narendranath",
                doctor_image: maleImg,
                doctor_speciality: "Oculoplasty and Orbit Disorders"
            },
            {
                doctor_id: 2,
                doctor_name: " Dr. Naveen Narendranath",
                doctor_image: maleImg,
                doctor_speciality: "Pediatric Ophthalmology and Strabismus"
            }
        ]
    },
    {
        hospital_id: 9,
        hospital_logo: logo9,
        hospital_name: "Udhi Eye Hospital",
        hospital_phoneno: "044-43471111",
        hospital_link: "https://www.udhieyehospitals.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Allen S. Raveendran",
                doctor_image: maleImg,
                doctor_speciality: "Oculoplasty and Orbit Disorders"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Anbarasi",
                doctor_image: femaleImg,
                doctor_speciality: "Pediatric Ophthalmology and Strabismus"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. R. Raveendran",
                doctor_image: maleImg,
                doctor_speciality: "Neuro-Ophthalmology"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. Sherren Raveendran",
                doctor_image: maleImg,
                doctor_speciality: "Uveitis and Retinal Disorders"
            }
        ]
    },
    {
        hospital_id: 10,
        hospital_logo: logo10,
        hospital_name: "Dr. Agarwal’s Eye Hospital",
        hospital_phoneno: "+91-9594904015",
        hospital_link: "https://www.dragarwal.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Kaladevi Sathish",
                doctor_image: femaleImg,
                doctor_speciality: "Orbit, Oculoplasty, Facial Aesthetic & Ophthalmic Plastic Surgery"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Balasubramaniam S",
                doctor_image: maleImg,
                doctor_speciality: "Orbit, Oculoplasty, Ocular Oncology, Therapeutic Oculoplasty"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Manjula Jayakumar",
                doctor_image: femaleImg,
                doctor_speciality: "Neuro Ophthalmology, Paediatric Ophthalmology"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. Akshya",
                doctor_image: femaleImg,
                doctor_speciality: "Squint, General Ophthalmology, Paediatric Ophthalmology"
            },
            {
                doctor_id: 5,
                doctor_name: "Dr. Preetha Rajasekaran",
                doctor_image: femaleImg,
                doctor_speciality: "Glaucoma, Cataract, General Ophthalmology, Neuro Ophthalmology, Paediatric Ophthalmology"
            },
            {
                doctor_id: 6,
                doctor_name: "Dr. Dhivya Ashok Kumar",
                doctor_image: femaleImg,
                doctor_speciality: "Uvea, Oculoplasty, Ocular Oncology"
            },
            {
                doctor_id: 7,
                doctor_name: "Dr. Karpagam D",
                doctor_image: femaleImg,
                doctor_speciality: "Cataract, Uveitis, General Ophthalmology"
            },
            {
                doctor_id: 8,
                doctor_name: "Prof. Amar Agarwal",
                doctor_image: maleImg,
                doctor_speciality: "Cataract, Glaucoma, Cornea, Retina, General Ophthalmology"
            },
            {
                doctor_id: 9,
                doctor_name: "Dr. K. S. Ramakrishnan",
                doctor_image: maleImg,
                doctor_speciality: "Cataract, Glaucoma, General Ophthalmology"
            },
            {
                doctor_id: 10,
                doctor_name: "Dr. Murali Ariga",
                doctor_image: maleImg,
                doctor_speciality: "Glaucoma, General Ophthalmology"
            }
        ]
    },
    {
        hospital_id: 11,
        hospital_logo: logo11,
        hospital_name: "Rainbow Children’s Hospital",
        hospital_phoneno: "+91-8062261290",
        hospital_link: "https://www.rainbowhospitals.in/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Sumana Manohar",
                doctor_image: maleImg,
                doctor_speciality: "Pediatric ENT and Airway Disorders"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Meenakshi Sundaram",
                doctor_image: femaleImg,
                doctor_speciality: "Pediatric Neurology"
            },
        ]
    },
    {
        hospital_id: 12,
        hospital_logo: logo12,
        hospital_name: "Fortis Malar Hospital",
        hospital_phoneno: "+91-9205010100",
        hospital_link: "https://www.fortismalarhospital.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Radhi Malar Anand",
                doctor_image: femaleImg,
                doctor_speciality: "Comprehensive Ophthalmology with a focus on Pediatric Ophthalmology"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Rajiv Lochan",
                doctor_image: maleImg,
                doctor_speciality: "Liver Transplant and HPB Surgery"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. R. Karthik",
                doctor_image: maleImg,
                doctor_speciality: "Urology & Renal Transplant"
            }
        ]
    },
    {
        hospital_id: 13,
        hospital_logo: logo13,
        hospital_name: "Iswarya Hospital",
        hospital_phoneno: "044-20252025",
        hospital_link: "https://iswarya.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Aishwarya T",
                doctor_image: femaleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. S. Suresh",
                doctor_image: maleImg,
                doctor_speciality: "Ophthalmology"
            }
        ]
    },
    {
        hospital_id: 14,
        hospital_logo: logo14,
        hospital_name: "Pristyn Care",
        hospital_phoneno: "+91-7303763223",
        hospital_link: "https://www.pristyncare.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Prerana Tripathi",
                doctor_image: femaleImg,
                doctor_speciality: "Ophthalmology"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Sushama Suram",
                doctor_image: femaleImg,
                doctor_speciality: "Ophthalmology"
            }
        ]
    },
    {
        hospital_id: 15,
        hospital_logo: logo15,
        hospital_name: "MGM Healthcare",
        hospital_phoneno: "+91-4442004200",
        hospital_link: "https://mgmmalar.in/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Radhi Malar Anand",
                doctor_image: femaleImg,
                doctor_speciality: "Comprehensive Ophthalmology with a focus on Pediatric Ophthalmology"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Anupam Sahu",
                doctor_image: femaleImg,
                doctor_speciality: "Crossed eyes and Strabismus"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Nagarajan V",
                doctor_image: maleImg,
                doctor_speciality: "Neurology with a focus on movement disorders"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. Mihir Mishra",
                doctor_image: maleImg,
                doctor_speciality: "Uveitis and Ocular Oncology"
            },
            {
                doctor_id: 5,
                doctor_name: "Dr. Debasish Dash",
                doctor_image: maleImg,
                doctor_speciality: "Diagnosis and management of glaucoma"
            },
            {
                doctor_id: 6,
                doctor_name: "Dr. Suhasini",
                doctor_image: femaleImg,
                doctor_speciality: "Cataract surgery and comprehensive eye care"
            }
        ]
    },
    {
        hospital_id: 16,
        hospital_logo: logo16,
        hospital_name: "Sri Ramachandra Medical Centre",
        hospital_phoneno: "044-45928692",
        hospital_link: "https://www.sriramachandramedicalcentre.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Radha Annamalai",
                doctor_image: femaleImg,
                doctor_speciality: "Oculoplasty and orbital surgery"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Suhas Prabhakar",
                doctor_image: femaleImg,
                doctor_speciality: "Strabismus and pediatric ophthalmology"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Stephen Sudhakar K",
                doctor_image: maleImg,
                doctor_speciality: "Neuro-ophthalmology"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. M. Meera Alias Devasena",
                doctor_image: femaleImg,
                doctor_speciality: "Uveitis and ocular immunology"
            },
            {
                doctor_id: 5,
                doctor_name: "Dr. M. Muthayya",
                doctor_image: maleImg,
                doctor_speciality: "Glaucoma"
            },
            {
                doctor_id: 6,
                doctor_name: "Dr. C. Arvind Babu",
                doctor_image: maleImg,
                doctor_speciality: "Cataract and refractive surgery"
            }
        ]
    },
    {
        hospital_id: 17,
        hospital_logo: logo17,
        hospital_name: "Medway Hospital",
        hospital_phoneno: "+91-8377805564",
        hospital_link: "https://medwayhospitals.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Salim J. Thomas",
                doctor_image: maleImg,
                doctor_speciality: "Oculoplasty and orbital surgery"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. K. Jothinathan",
                doctor_image: maleImg,
                doctor_speciality: "Strabismus and pediatric ophthalmology"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. D. Divakar",
                doctor_image: maleImg,
                doctor_speciality: "Neuro-ophthalmology"
            },
            {
                doctor_id: 4,
                doctor_name: "Dr. C. M. Thiagarajan",
                doctor_image: maleImg,
                doctor_speciality: "Uveitis and ocular immunology"
            }
        ]
    },
    {
        hospital_id: 18,
        hospital_logo: logo18,
        hospital_name: "SIMS Hospital",
        hospital_phoneno: "+91-4420002001",
        hospital_link: "https://simshospitals.com/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Aparna Bhatnagar",
                doctor_image: femaleImg,
                doctor_speciality: "Oculoplasty and orbital surgery"
            },
            {
                doctor_id: 2,
                doctor_name: "Dr. Kalpana R",
                doctor_image: femaleImg,
                doctor_speciality: "Strabismus and pediatric ophthalmology"
            },
            {
                doctor_id: 3,
                doctor_name: "Dr. Prativa Misra",
                doctor_image: femaleImg,
                doctor_speciality: "Medical retina and uveitis"
            }
        ]
    },
    {
        hospital_id: 19,
        hospital_logo: logo19,
        hospital_name: "Deepa Hospital",
        hospital_phoneno: "+91-9069336933",
        hospital_link: "https://deepahospital.in/",
        doctors: [
            {
                doctor_id: 1,
                doctor_name: "Dr. Sudha Bhuvaneshwari",
                doctor_image: femaleImg,
                doctor_speciality: "General ophthalmology with experience in orbital and oculoplastic conditions"
            },
            {
                doctor_id: 1,
                doctor_name: "Dr. R. Venkatesh",
                doctor_image: maleImg,
                doctor_speciality: "General ophthalmology with experience in orbital and oculoplastic conditions"
            }
        ]
    },
]

export const techStack = [
    {
        id: 1,
        name: "React.js"
    },
    {
        id: 2,
        name: "Tailwind CSS"
    },
    {
        id: 3,
        name: "CNN"
    },
    {
        id: 4,
        name: "Python"
    },
    {
        id: 5,
        name: "Tensorflow"
    },
    {
        id: 6,
        name: "Roboflow"
    },
    {
        id: 7,
        name: "OpenCV"
    }, 
    {
        id: 8,
        name: "Flask"
    },
    {
        id: 9,
        name: "Raspberry Pi"
    }
]