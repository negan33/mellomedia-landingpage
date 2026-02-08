export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#082421]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-3 bg-[#1a4a45] rounded-full px-4 py-2">
          <a href="#" className="cursor-pointer hover:opacity-80 transition">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1.62071C11.4047 1.62071 11.6895 1.63125 12.6352 1.67344C13.5141 1.71211 13.9887 1.85977 14.3051 1.98282C14.7235 2.14453 15.0258 2.34141 15.3387 2.65431C15.6551 2.97071 15.8485 3.26953 16.0102 3.68789C16.1332 4.00431 16.2809 4.48243 16.3195 5.35782C16.3617 6.30704 16.3723 6.59181 16.3723 8.99297C16.3723 11.3977 16.3617 11.6824 16.3195 12.6281C16.2809 13.507 16.1332 13.9816 16.0102 14.298C15.8485 14.7164 15.6516 15.0188 15.3387 15.3317C15.0223 15.648 14.7235 15.8414 14.3051 16.0031C13.9887 16.1262 13.5105 16.2738 12.6352 16.3125C11.686 16.3547 11.4012 16.3652 9 16.3652C6.59531 16.3652 6.31055 16.3547 5.36484 16.3125C4.48594 16.2738 4.01133 16.1262 3.69492 16.0031C3.27656 15.8414 2.97422 15.6445 2.66133 15.3317C2.34492 15.0152 2.15156 14.7164 1.98984 14.298C1.8668 13.9816 1.71914 13.5035 1.68047 12.6281C1.63828 11.679 1.62773 11.3941 1.62773 8.99297C1.62773 6.58829 1.63828 6.30352 1.68047 5.35782C1.71914 4.47891 1.8668 4.00431 1.98984 3.68789C2.15156 3.26953 2.34844 2.96719 2.66133 2.65431C2.97773 2.33789 3.27656 2.14453 3.69492 1.98282C4.01133 1.85977 4.48945 1.71211 5.36484 1.67344C6.31055 1.63125 6.59531 1.62071 9 1.62071ZM9 0C6.55664 0 6.25078 0.0105469 5.29102 0.0527344C4.33477 0.0949219 3.67734 0.249609 3.10781 0.471094C2.51367 0.703125 2.01094 1.00898 1.51172 1.51172C1.00898 2.01094 0.703125 2.51367 0.471094 3.10430C0.249609 3.67734 0.0949219 4.33125 0.0527344 5.28750C0.0105469 6.25078 0 6.55664 0 9C0 11.4434 0.0105469 11.7492 0.0527344 12.709C0.0949219 13.6652 0.249609 14.3227 0.471094 14.8922C0.703125 15.4863 1.00898 15.9891 1.51172 16.4883C2.01094 16.9875 2.51367 17.2969 3.10430 17.5254C3.67734 17.7469 4.33125 17.9016 5.2875 17.9438C6.24727 17.986 6.55313 17.9965 8.99648 17.9965C11.4398 17.9965 11.7457 17.986 12.7055 17.9438C13.6617 17.9016 14.3191 17.7469 14.8887 17.5254C15.4793 17.2969 15.982 16.9875 16.4813 16.4883C16.9805 15.9891 17.2898 15.4863 17.5184 14.8957C17.7398 14.3227 17.8945 13.6688 17.9367 12.7125C17.9789 11.7527 17.9895 11.4469 17.9895 9.00352C17.9895 6.56016 17.9789 6.25430 17.9367 5.29453C17.8945 4.33828 17.7398 3.68086 17.5184 3.11133C17.2969 2.51367 16.991 2.01094 16.4883 1.51172C15.9891 1.0125 15.4863 0.703125 14.8957 0.474609C14.3227 0.253125 13.6688 0.0984375 12.7125 0.05625C11.7492 0.0105469 11.4434 0 9 0Z" fill="white"/>
              <path d="M9 4.37695C6.49219 4.37695 4.45898 6.41016 4.45898 8.91797C4.45898 11.4258 6.49219 13.459 9 13.459C11.5078 13.459 13.541 11.4258 13.541 8.91797C13.541 6.41016 11.5078 4.37695 9 4.37695ZM9 11.9988C7.34414 11.9988 6.00039 10.6551 6.00039 8.91797C6.00039 7.18438 7.34414 5.83711 9 5.83711C10.6523 5.83711 11.9961 7.18438 11.9961 8.91797C11.9961 10.6551 10.6523 11.9988 9 11.9988Z" fill="white"/>
              <path d="M14.8852 4.19414C14.8852 4.79180 14.4 5.27344 13.8059 5.27344C13.2082 5.27344 12.7266 4.78828 12.7266 4.19414C12.7266 3.59648 13.2117 3.11484 13.8059 3.11484C14.4 3.11484 14.8852 3.6 14.8852 4.19414Z" fill="white"/>
            </svg>
          </a>
          <a href="#" className="cursor-pointer hover:opacity-80 transition">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6676 0H1.32891C0.594141 0 0 0.580078 0 1.29727V16.6992C0 17.4164 0.594141 18 1.32891 18H16.6676C17.4023 18 18 17.4164 18 16.7027V1.29727C18 0.580078 17.4023 0 16.6676 0ZM5.34023 15.3387H2.66836V6.74648H5.34023V15.3387ZM4.0043 5.57578C3.14648 5.57578 2.45391 4.8832 2.45391 4.02891C2.45391 3.17461 3.14648 2.48203 4.0043 2.48203C4.85859 2.48203 5.55117 3.17461 5.55117 4.02891C5.55117 4.87969 4.85859 5.57578 4.0043 5.57578ZM15.3387 15.3387H12.6703V11.1621C12.6703 10.1672 12.6527 8.88398 11.2816 8.88398C9.89297 8.88398 9.68203 9.97031 9.68203 11.0918V15.3387H7.01719V6.74648H9.57656V7.9207H9.61172C9.9668 7.2457 10.8387 6.53203 12.1359 6.53203C14.8395 6.53203 15.3387 8.31094 15.3387 10.6242V15.3387V15.3387Z" fill="white"/>
            </svg>
          </a>
          <a href="#" className="cursor-pointer hover:opacity-80 transition">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18L1.26525 13.3778C0.484499 12.0247 0.0742498 10.491 0.0749998 8.91825C0.0772498 4.00125 4.07849 0 8.99473 0C11.3805 0.00075 13.62 0.93 15.3045 2.616C16.9882 4.302 17.9152 6.543 17.9145 8.9265C17.9122 13.8443 13.911 17.8455 8.99473 17.8455C7.50223 17.8448 6.03149 17.4705 4.72874 16.7595L0 18ZM4.94774 15.1448C6.20474 15.891 7.40473 16.338 8.99173 16.3387C13.0777 16.3387 16.4062 13.0133 16.4085 8.925C16.41 4.8285 13.0972 1.5075 8.99773 1.506C4.90874 1.506 1.5825 4.8315 1.581 8.919C1.58025 10.5878 2.06925 11.8372 2.89049 13.1445L2.14125 15.8805L4.94774 15.1448ZM13.488 11.0468C13.4325 10.9537 13.284 10.8982 13.0605 10.7865C12.8377 10.6748 11.742 10.1355 11.5372 10.0612C11.3332 9.987 11.1847 9.9495 11.0355 10.173C10.887 10.3958 10.4595 10.8982 10.3297 11.0468C10.2 11.1953 10.0695 11.214 9.84673 11.1023C9.62398 10.9905 8.90548 10.7557 8.05423 9.996C7.39198 9.405 6.94423 8.67525 6.81448 8.45175C6.68473 8.229 6.80098 8.10825 6.91198 7.99725C7.01248 7.8975 7.13473 7.737 7.24648 7.6065C7.35973 7.4775 7.39648 7.3845 7.47148 7.23525C7.54573 7.08675 7.50898 6.95625 7.45273 6.8445C7.39648 6.7335 6.95098 5.63625 6.76573 5.19C6.58424 4.75575 6.40049 4.81425 6.26399 4.8075L5.83649 4.8C5.68799 4.8 5.44649 4.8555 5.24249 5.079C5.03849 5.3025 4.46249 5.841 4.46249 6.93825C4.46249 8.0355 5.26124 9.09525 5.37224 9.24375C5.48399 9.39225 6.94348 11.6438 9.17923 12.609C9.71098 12.8385 10.1265 12.9757 10.4497 13.0785C10.9837 13.248 11.4697 13.224 11.8537 13.167C12.282 13.1032 13.1722 12.6277 13.3582 12.1073C13.5442 11.586 13.5442 11.1398 13.488 11.0468Z" fill="white"/>
            </svg>
          </a>
          <a href="#" className="cursor-pointer hover:opacity-80 transition">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8207 5.40003C17.8207 5.40003 17.6449 4.15902 17.1035 3.6141C16.418 2.89691 15.6516 2.89339 15.3 2.8512C12.7828 2.66839 9.00352 2.66839 9.00352 2.66839H8.99648C8.99648 2.66839 5.21719 2.66839 2.7 2.8512C2.34844 2.89339 1.58203 2.89691 0.896484 3.6141C0.355078 4.15902 0.182812 5.40003 0.182812 5.40003C0.182812 5.40003 0 6.85902 0 8.31449V9.67855C0 11.134 0.179297 12.593 0.179297 12.593C0.179297 12.593 0.355078 13.834 0.892969 14.3789C1.57852 15.0961 2.47852 15.0715 2.8793 15.1489C4.3207 15.286 9 15.3282 9 15.3282C9 15.3282 12.7828 15.3211 15.3 15.1418C15.6516 15.0996 16.418 15.0961 17.1035 14.3789C17.6449 13.834 17.8207 12.593 17.8207 12.593C17.8207 12.593 18 11.1375 18 9.67855V8.31449C18 6.85902 17.8207 5.40003 17.8207 5.40003ZM7.14023 11.3344V6.27542L12.0023 8.8137L7.14023 11.3344Z" fill="white"/>
            </svg>
          </a>
        </div>

        {/* Logo and Navigation */}
        <div className="flex items-center justify-between gap-12 bg-white rounded-full px-12 py-4 flex-1">
          <img src="/Group 2 11.svg" alt="Hello minds" className="h-10" />
          <nav className="flex gap-8">
            <a href="#features" className="text-[#082421] hover:text-gray-600 font-semibold">Features</a>
            <a href="#pricing" className="text-[#082421] hover:text-gray-600 font-semibold">Pricing</a>
            <a href="#resources" className="text-[#082421] hover:text-gray-600 font-semibold">Resources</a>
            <a href="#contact" className="text-[#082421] hover:text-gray-600 font-semibold">Contact Us</a>
          </nav>
        </div>

        {/* Login Button */}
        <button className="bg-[#FFDE36] hover:bg-yellow-500 text-[#082421] font-semibold px-6 py-3 rounded-full transition">
          Login/SignUp
        </button> 
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-8 py-32 text-center">
        {/* Greeting Badge */}
        <div className="relative mb-8 inline-block">
          <div className="absolute -top-12 right-8 w-[98px] h-[98px] z-0">
            <img src="/smiley.svg" alt="Smiley" className="w-full h-full" />
          </div>
          <div className="flex items-center justify-center gap-2 bg-[#2D4542] rounded-full w-[391px] h-[52px] relative z-10 text-[32px] font-semibold leading-[100%] text-center">
            <span className="text-[#D5FFFA]">Say 👋 hello to</span>
            <span className="text-[#FFDE36]">mello!</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[72px] font-extrabold leading-[100%] text-center mb-6 max-w-5xl">
          <span className="text-[#5a8a85]">FUTURE OF </span>
          <span className="text-[#D5FFFA]">THERAPY</span>
          <br />
          <span className="text-[#D5FFFA]">PRACTICE MANAGEMENT</span>
        </h1>

        {/* Subheading */}
        <p className="text-[25px] font-semibold leading-[100%] text-center mb-8 max-w-2xl p-1" style={{background: '#D5FFFA99', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
          we believe that therapists deserve the same care and support they give their clients.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#FFDE36] hover:bg-yellow-500 text-[#082421] font-semibold px-5 py-2 rounded-full transition flex items-center gap-2">
          Get Started for free →
          </button>
          <button className="bg-[#D5FFFA] hover:bg-gray-100 text-[#082421] font-semibold px-5 py-2 rounded-full transition flex items-center gap-2">
            See our plans →
          </button>
        </div>
      </main>

      {/* Dashboard Preview Section */}
      <section className="px-8 pb-20">
        <div className="max-w-5xl mx-auto rounded-[48px] border-[32px] border-[#2D4542] overflow-hidden">
          <img src="/1 1.png" alt="Dashboard" className="w-full shadow-2xl rounded-3xl" />
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="pt-32 pb-16 bg-white overflow-hidden">
        <div className="text-center mb-20 px-8">
          <h2 className="text-[45px] font-bold leading-[120%] mb-16 text-[#082421] text-center">
            Your Focus Belongs to Your Clients.<br />
            Your Data Belongs Only to You.
          </h2>
          
          <p className="text-[25px] font-bold leading-[120%] text-center max-w-3xl mx-auto mb-8">
            <span className="text-[#00000080]">Establish immediate trust with </span>
            <span className="text-[#082421]">privacy standards</span>
            <span className="text-[#00000080]"> that keep data<br />invisible even to us, while our platform handles the </span>
            <span className="text-[#082421]">daily admin<br />grind</span>
            <span className="text-[#00000080]"> so you can dedicate your time to your clients.</span>
          </p>
          
          <p className="text-[25px] font-bold leading-[100%] text-center text-[#082421] mb-36">but, how are we are doing it?</p>
        </div>
        
        <div className="relative max-w-[1920px] mx-auto px-8">
          <div className="absolute top-0 left-1/2 -translate-x-[calc(50%+138px)] -translate-y-1/2 w-24 h-24 rounded-full bg-[#FFDE3633] flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-[#F9E141] flex items-center justify-center">
              <svg width="26" height="22" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M22.5902 4.19409C24.5353 5.98097 26.1861 8.38995 27.4203 11.2869C27.5276 11.544 27.5275 11.8421 27.4203 12.0857C24.5496 18.8271 19.4382 22.8611 13.7504 22.8611H13.7367C11.1479 22.861 8.6663 22.0085 6.47986 20.4519L10.7318 16.1599C11.5904 16.7406 12.637 17.0945 13.7504 17.0945C16.7016 17.0945 19.1029 14.6713 19.1029 11.6931C19.1029 10.5696 18.7539 9.51357 18.1771 8.64722L22.5902 4.19409ZM13.7504 0.525146C15.6686 0.525146 17.5333 0.985338 19.2504 1.85034L14.7699 6.3728C14.448 6.31866 14.0991 6.27808 13.7504 6.27808C10.7858 6.27808 8.38418 8.70146 8.38416 11.6931C8.38416 12.0451 8.42523 12.3975 8.47888 12.7224L3.51502 17.7302C2.17364 16.16 1.00601 14.2637 0.0804463 12.0857C-0.0267877 11.8421 -0.0268431 11.544 0.0804463 11.2869C2.95114 4.54555 8.06241 0.525268 13.7367 0.525146H13.7504Z" fill="#082421"/>
                <path d="M12.1942 14.6848L3.87782 23.0783C3.6766 23.2801 3.42079 23.3752 3.16591 23.3752C2.91117 23.3751 2.64266 23.2799 2.45497 23.0783C2.11998 22.7399 2.06667 22.1973 2.33485 21.8049L2.37489 21.7512L16.7684 7.22679L21.0214 2.93577L22.2147 1.72972C22.2415 1.70274 22.2687 1.67564 22.2821 1.64866C22.3088 1.62169 22.336 1.59458 22.3495 1.56761L23.6102 0.29417C24.0126 -0.0980839 24.6431 -0.0980295 25.0321 0.29417C25.4346 0.686743 25.4346 1.33714 25.0321 1.72972L22.5907 4.19358L18.1776 8.64671L13.8622 13.0022L16.7157 10.1233C16.9571 10.5835 17.0907 11.1252 17.0907 11.6936C17.0906 13.548 15.5885 15.0636 13.7509 15.0637C13.1875 15.0637 12.6503 14.9285 12.1942 14.6848Z" fill="#082421"/>
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center gap-16">
            <div className="flex-1 -ml-8 relative">
              <img src="/2 2.png" alt="All Clients" className="w-full rounded-r-xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-[#C5D5D3] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#0A2E2A] flex items-center justify-center">
                    <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M22.1818 51.6667C21.8619 51.6667 21.542 51.5932 21.2533 51.4437L11.9505 46.6282C9.31073 45.2602 7.24575 43.7251 5.63329 41.9367C2.10409 38.0254 0.140538 33.0047 0.109329 27.7964L9.83985e-05 10.6543C-0.0129053 8.67592 1.26406 6.90016 3.173 6.2314L20.2546 0.275869C21.2689 -0.0863766 22.4002 -0.091443 23.4327 0.258137L40.5794 6.01101C42.4987 6.65191 43.7965 8.41501 43.8069 10.3909L43.9161 27.5456C43.9499 32.7463 42.054 37.7873 38.5794 41.7416C36.9852 43.5554 34.9384 45.1133 32.3246 46.5066L23.105 51.4311C22.819 51.5856 22.5017 51.6641 22.1818 51.6667" fill="#D5FFFA" fillOpacity="0.6"/>
                      <path d="M20.1999 31.8289C19.7006 31.8315 19.2012 31.6516 18.8163 31.2818L13.8645 26.5194C13.0999 25.7797 13.0921 24.579 13.8489 23.8342C14.6057 23.0869 15.8411 23.0793 16.6083 23.8165L20.1713 27.2413L28.8708 18.664C29.6302 17.9167 30.8655 17.9091 31.6301 18.6462C32.3974 19.3859 32.4052 20.5892 31.6483 21.3314L21.5757 31.264C21.196 31.639 20.6992 31.8264 20.1999 31.8289" fill="#D5FFFA" fillOpacity="0.6"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 -mr-8">
              <div className="bg-white rounded-[32px] p-10 text-black max-w-2xl">
                <span className="bg-black text-white px-4 py-2 rounded-full font-bold text-[20px] leading-[100%] inline-block mb-6">Security & Compliance</span>
                <h3 className="text-[36px] font-bold mb-6 leading-tight">Zero-Knowledge Encryption<br />& ABDM Compliance</h3>
                <p className="text-[18px] font-medium leading-[140%] text-black">
                  Rest assured that your practice meets the highest digital safety standards. We utilize Zero-Knowledge encryption, which means your client data is encrypted before it touches our servers our tech team ensure its mathematically impossible for us or anyone else to view it. Full ABDM compliance further establishes your credibility within the digital health ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Workflow Section */}
      <section className="pt-16 pb-16 bg-white overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-8">
          <div className="flex justify-between items-center gap-16">
            <div className="flex-1 -ml-8">
              <div className="bg-white rounded-[32px] p-10 text-black max-w-2xl">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-[20px] font-bold leading-[100%] text-center inline-block mb-6">Clinical Workflow</span>
                <h3 className="text-[36px] font-bold mb-6 leading-tight">Comprehensive Client Management & Clinical Notes</h3>
                <p className="text-[18px] font-medium leading-[140%] text-black">
                  Access a dedicated workspace for every client, featuring case histories, session logs, and an activity suggestion engine that automatically notifies clients of new tasks. Speed up your documentation by using our standardized industry-compliant note templates, or create your own custom templates to match your therapy style.
                </p>
              </div>
            </div>
            <div className="flex-1 -mr-8 relative">
             <div className="absolute top-0 right-[8%] -translate-y-1/2 w-24 h-24 rounded-full bg-[#2D454233] flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-[#D5FFFA] flex items-center justify-center">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M22.2626 2.75H10.7387C6.55875 2.75 4.125 5.1975 4.125 9.39125V23.595C4.125 27.8575 6.55875 30.25 10.7387 30.25H22.2626C26.51 30.25 28.875 27.8575 28.875 23.595V9.39125C28.875 5.1975 26.51 2.75 22.2626 2.75" fill="#082421"/>
                    <path d="M11.1097 21.6428H21.89C22.4384 21.698 22.8518 22.1651 22.8519 22.7288C22.8519 23.2773 22.4384 23.7459 21.89 23.801H11.1097C10.6972 23.856 10.2984 23.6497 10.0784 23.3059C9.85863 22.9485 9.85861 22.4953 10.0784 22.1516C10.2984 21.7941 10.6972 21.6016 11.1097 21.6428ZM21.89 15.3713C22.4809 15.3715 22.962 15.8536 22.9622 16.4446C22.9622 17.0357 22.4811 17.5177 21.89 17.5178H11.1097C10.5171 17.5178 10.0374 17.0358 10.0374 16.4446C10.0377 15.8535 10.5172 15.3713 11.1097 15.3713H21.89ZM15.2191 9.1438C15.8117 9.1438 16.2933 9.62521 16.2933 10.2151C16.2932 10.8214 15.8116 11.303 15.2191 11.303H11.1097C10.5171 11.303 10.0374 10.821 10.0374 10.2297C10.0376 9.63863 10.5172 9.15747 11.1097 9.15747V9.1438H15.2191Z" fill="#082421"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img src="/9.png" alt="Clinical Workflow" className="w-full rounded-l-xl" />
                <div className="absolute bottom-0 left-1/2 -translate-x-[calc(50%+80px)] translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-[#FFDE3633] flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#FFDE36] flex items-center justify-center">
                      <svg width="44" height="52" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M51.6477 48.9626H36.9375C35.5023 48.9626 34.335 50.1484 34.335 51.6064C34.335 53.0671 35.5023 54.2501 36.9375 54.2501H51.6477C53.0829 54.2501 54.2502 53.0671 54.2502 51.6064C54.2502 50.1484 53.0829 48.9626 51.6477 48.9626Z" fill="#031C16"/>
                        <path d="M26.6316 17.8351L40.5709 29.0987C40.9072 29.3681 40.9646 29.8624 40.7022 30.2067L24.1767 51.7397C23.1379 53.0699 21.607 53.8224 19.9668 53.8502L10.9455 53.9613C10.4643 53.9669 10.0433 53.6336 9.934 53.156L7.8837 44.2418C7.52831 42.6033 7.8837 40.9093 8.92252 39.6041L25.5299 17.9684C25.7979 17.6213 26.2927 17.5602 26.6316 17.8351Z" fill="#031C16"/>
                        <path opacity="0.4" d="M46.8113 22.3857L44.1241 25.7404C43.8534 26.0819 43.3668 26.1375 43.0306 25.8653C39.7638 23.2216 31.3985 16.4374 29.0776 14.5573C28.7386 14.2796 28.6921 13.7853 28.9655 13.441L31.5571 10.2224C33.9081 7.19545 38.0087 6.91775 41.3165 9.55591L45.1164 12.5829C46.6746 13.8047 47.7135 15.4154 48.0688 17.1094C48.4789 18.9728 48.0415 20.8028 46.8113 22.3857Z" fill="#031C16"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance & Billing Section */}
      <section className="pt-12 pb-16 bg-white overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-8">
          <div className="absolute top-0 left-1/2 -translate-x-[calc(50%+138px)] -translate-y-1/2 w-24 h-24 rounded-full bg-[#FFDE3633] flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-[#F9E141] flex items-center justify-center">
              <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3283 7.61476H22.3292C19.5374 7.61967 17.2758 9.82479 17.2707 12.5468C17.267 15.275 19.5311 17.4899 22.3292 17.4936H28.3333V17.927C28.3333 22.6859 25.4484 25.5 20.5662 25.5H7.76837C2.88496 25.5 0 22.6859 0 17.927V7.56197C0 2.80305 2.88496 0 7.76837 0H20.5612C25.4433 0 28.3283 2.80305 28.3283 7.56197V7.61476ZM6.71437 7.60371H14.7044H14.7094H14.7195C15.3176 7.60126 15.8012 7.1261 15.7987 6.54167C15.7961 5.95847 15.3076 5.487 14.7094 5.48946H6.71437C6.12 5.49191 5.6377 5.96215 5.63519 6.5429C5.63267 7.1261 6.11622 7.60126 6.71437 7.60371Z" fill="#082421"/>
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center gap-16">
            <div className="flex-1 -ml-8 relative">
              <img src="/5 137477988.png" alt="Finance & Billing" className="w-full rounded-r-xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-[#C5D5D3] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#0A2E2A] flex items-center justify-center">
                    <svg width="50" height="58" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M48.5893 23.3043C47.4229 23.3043 45.8779 23.2785 43.9543 23.2785C39.2632 23.2785 35.4058 19.3957 35.4058 14.6605V6.3525C35.4058 5.69891 34.884 5.16675 34.2369 5.16675H20.5725C14.1957 5.16675 9.0415 10.4006 9.0415 16.815V44.6504C9.0415 51.38 14.4412 56.8334 21.1046 56.8334H41.4527C47.8066 56.8334 52.9582 51.6332 52.9582 45.2136V24.4668C52.9582 23.8107 52.4389 23.2811 51.7892 23.2837C50.697 23.2914 49.3873 23.3043 48.5893 23.3043Z" fill="#D5FFFA"/>
                      <path opacity="0.4" d="M41.5501 6.63213C40.7777 5.82871 39.4292 6.38154 39.4292 7.49496V14.3072C39.4292 17.1644 41.7826 19.5152 44.6398 19.5152C46.4404 19.5359 48.941 19.541 51.0645 19.5359C52.1521 19.5333 52.7049 18.2339 51.9506 17.4485C49.2252 14.6146 44.3453 9.53579 41.5501 6.63213Z" fill="#D5FFFA"/>
                      <path d="M37.2471 38.4727C38.3086 38.4729 39.1708 39.3359 39.1709 40.3975C39.1709 41.4591 38.3086 42.3191 37.2471 42.3193H23.1826C22.121 42.3191 21.2607 41.4591 21.2607 40.3975C21.2608 39.3359 22.1211 38.4729 23.1826 38.4727H37.2471ZM31.9277 25.5713C32.9893 25.5715 33.8516 26.4345 33.8516 27.4961C33.8514 28.5576 32.9892 29.4177 31.9277 29.418H23.1826C22.121 29.4179 21.2609 28.5577 21.2607 27.4961C21.2607 26.4344 22.1209 25.5714 23.1826 25.5713H31.9277Z" fill="#D5FFFA"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 -mr-8">
              <div className="bg-white rounded-[32px] p-10 text-black max-w-2xl">
                <span className="bg-[#D5FFFA] text-[#082421] px-4 py-2 rounded-full text-[20px] font-bold leading-[100%] text-center inline-block mb-6">Finance & Billing</span>
                <h3 className="text-[36px] font-bold mb-6 leading-tight">Integrated Payments &<br />Automated Invoicing</h3>
                <p className="text-[18px] font-medium leading-[140%] text-black">
                  Generate professional invoices instantly and integrate your preferred payment gateway directly into the platform, allowing for seamless, secure transaction tracking that keeps your practice's cash flow healthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="pt-12 pb-16 bg-white overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-8">
          <div className="flex justify-between items-center gap-16">
            <div className="flex-1 -ml-8">
              <div className="bg-white rounded-[32px] p-10 text-black max-w-2xl">
                <span className="bg-[#C5D5D3] text-[#082421] px-4 py-2 rounded-full text-[20px] font-bold leading-[100%] text-center inline-block mb-6">Scheduling</span>
                <h3 className="text-[36px] font-bold mb-6 leading-tight">Smart Multi-Service<br />Calendar & Google Sync</h3>
                <p className="text-[18px] font-medium leading-[140%] text-black">
                  Organize your time effectively by creating distinct calendar resources for specific services (e.g. Individual Therapy, Couples Counseling, ADHD Assessment). Full two-way synchronization with Google Calendar ensures your personal and professional schedules never conflict.
                </p>
              </div>
            </div>
            <div className="flex-1 -mr-8 relative">
              <div className="absolute top-0 right-[8%] -translate-y-1/2 w-24 h-24 rounded-full bg-[#2D454233] flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-[#D5FFFA] flex items-center justify-center">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.5 16.9712V31.0405C38.4999 36.7951 34.8776 40.3334 29.082 40.3335H14.9004C9.1589 40.3335 5.5 36.7216 5.5 30.9282V16.9712H38.5ZM29.4082 30.0503C28.5751 30.0686 27.9047 30.7636 27.9229 31.6069C27.923 32.4501 28.5928 33.1461 29.4258 33.1646C30.277 33.1646 30.9657 32.4685 30.9658 31.6069C30.9658 30.7471 30.277 30.0503 29.4258 30.0503H29.4082ZM14.502 30.0298C13.6688 30.0683 13.0166 30.7636 13.0166 31.6069C13.0529 32.4501 13.7411 33.1122 14.5742 33.0737C15.3892 33.0388 16.0411 32.3418 16.0049 31.4985C15.9868 30.6736 15.3169 30.0299 14.502 30.0298ZM21.9639 30.0298C21.1307 30.0683 20.4785 30.7636 20.4785 31.6069C20.5149 32.4501 21.2031 33.1122 22.0361 33.0737C22.8512 33.0389 23.503 32.3419 23.4668 31.4985C23.4487 30.6736 22.7789 30.0298 21.9639 30.0298ZM14.5195 23.3755C13.6865 23.4141 13.0342 24.1104 13.0342 24.9536C13.0704 25.7949 13.7589 26.4567 14.5918 26.4185C15.4068 26.3836 16.0597 25.6865 16.0234 24.8413C16.0051 24.0183 15.3344 23.3755 14.5195 23.3755ZM21.9639 23.3755C21.1307 23.414 20.4785 24.1103 20.4785 24.9536C20.5148 25.795 21.2031 26.4569 22.0361 26.4185C22.8512 26.3836 23.503 25.6865 23.4668 24.8413C23.4485 24.0184 22.7787 23.3755 21.9639 23.3755ZM29.4258 23.395C28.5927 23.4134 27.9405 24.0918 27.9404 24.9351V24.9536C27.9586 25.7951 28.6473 26.4368 29.4805 26.4185C30.2954 26.4018 30.9478 25.7051 30.9297 24.8618C30.8935 24.0533 30.2408 23.395 29.4258 23.395Z" fill="#031C16"/>
                    <path opacity="0.4" d="M5.50635 16.971C5.52989 15.8949 5.62045 13.759 5.79071 13.0715C6.66008 9.20503 9.61233 6.74836 13.8324 6.39819H30.1694C34.3533 6.76669 37.3417 9.23986 38.2111 13.0715C38.3796 13.7407 38.4701 15.893 38.4937 16.971H5.50635Z" fill="#031C16"/>
                    <path d="M15.2257 12.0817C16.0226 12.0817 16.6203 11.4786 16.6203 10.6701V5.08025C16.6203 4.27175 16.0226 3.66675 15.2257 3.66675C14.4287 3.66675 13.8311 4.27175 13.8311 5.08025V10.6701C13.8311 11.4786 14.4287 12.0817 15.2257 12.0817" fill="#031C16"/>
                    <path d="M28.774 12.0817C29.5528 12.0817 30.1686 11.4786 30.1686 10.6701V5.08025C30.1686 4.27175 29.5528 3.66675 28.774 3.66675C27.9771 3.66675 27.3794 4.27175 27.3794 5.08025V10.6701C27.3794 11.4786 27.9771 12.0817 28.774 12.0817" fill="#031C16"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img src="/9.png" alt="Scheduling" className="w-full rounded-l-xl" />
                <div className="absolute bottom-0 left-1/2 -translate-x-[calc(50%+90px)] translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-[#FFDE3633] flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#F9E141] flex items-center justify-center">
                      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M32.821 4.08325H39.734C42.597 4.08325 44.9168 6.4227 44.9168 9.30984V16.2812C44.9168 19.1684 42.597 21.5078 39.734 21.5078H32.821C29.958 21.5078 27.6382 19.1684 27.6382 16.2812V9.30984C27.6382 6.4227 29.958 4.08325 32.821 4.08325Z" fill="#082421"/>
                        <path d="M16.1792 27.4924C19.0422 27.4924 21.3618 29.8319 21.3618 32.719V39.6897C21.3618 42.5749 19.0422 44.9163 16.1792 44.9163H9.26611C6.40324 44.9161 4.0835 42.5748 4.0835 39.6897V32.719C4.0835 29.8319 6.40324 27.4925 9.26611 27.4924H16.1792ZM39.7339 27.4924C42.5969 27.4924 44.9165 29.8319 44.9165 32.719V39.6897C44.9165 42.5749 42.5969 44.9163 39.7339 44.9163H32.8208C29.9579 44.9162 27.6382 42.5748 27.6382 39.6897V32.719C27.6382 29.8319 29.9579 27.4925 32.8208 27.4924H39.7339ZM16.1792 4.08325C19.0422 4.08325 21.3618 6.42268 21.3618 9.30981V16.2815C21.3617 19.1685 19.0421 21.5081 16.1792 21.5081H9.26611C6.40333 21.5079 4.08363 19.1685 4.0835 16.2815V9.30981C4.08351 6.42275 6.40325 4.08336 9.26611 4.08325H16.1792Z" fill="#082421"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharable Booking Profile Section */}
      <section className="pt-12 pb-16 bg-white overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-8">
          <div className="flex justify-between items-center gap-16">
            <div className="flex-1 -ml-8 relative">
              <div className="absolute top-0 right-[calc(10%-15px)] -translate-y-1/2 w-24 h-24 rounded-full bg-[#FFDE3633] flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-[#F9E141] flex items-center justify-center">
                  <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.3283 7.61476H22.3292C19.5374 7.61967 17.2758 9.82479 17.2707 12.5468C17.267 15.275 19.5311 17.4899 22.3292 17.4936H28.3333V17.927C28.3333 22.6859 25.4484 25.5 20.5662 25.5H7.76837C2.88496 25.5 0 22.6859 0 17.927V7.56197C0 2.80305 2.88496 0 7.76837 0H20.5612C25.4433 0 28.3283 2.80305 28.3283 7.56197V7.61476ZM6.71437 7.60371H14.7044H14.7094H14.7195C15.3176 7.60126 15.8012 7.1261 15.7987 6.54167C15.7961 5.95847 15.3076 5.487 14.7094 5.48946H6.71437C6.12 5.49191 5.6377 5.96215 5.63519 6.5429C5.63267 7.1261 6.11622 7.60126 6.71437 7.60371Z" fill="#082421"/>
                    <path opacity="0.4" d="M19.8865 13.1702C20.1827 14.5177 21.3642 15.4658 22.713 15.4411H27.3171C27.8783 15.4411 28.3335 14.9763 28.3335 14.4018V10.8154C28.3323 10.2422 27.8783 9.77614 27.3171 9.7749H22.6046C21.0703 9.77983 19.8311 11.0534 19.8335 12.6228C19.8335 12.8065 19.8516 12.9902 19.8865 13.1702" fill="#082421"/>
                    <circle cx="22.6667" cy="12.6083" r="1.41667" fill="#082421"/>
                  </svg>
                </div>
              </div>
              <img src="/5 137477988.png" alt="Sharable Booking Profile" className="w-full rounded-r-xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-[#C5D5D3] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#0A2E2A] flex items-center justify-center">
                    <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M39.5478 18.1376C38.3814 18.1376 36.8364 18.1118 34.9128 18.1118C30.2216 18.1118 26.3643 14.229 26.3643 9.49375V1.18575C26.3643 0.532167 25.8425 0 25.1954 0H11.531C5.15418 0 0 5.23383 0 11.6483V39.4837C0 46.2133 5.39974 51.6667 12.0631 51.6667H32.4112C38.765 51.6667 43.9167 46.4664 43.9167 40.0468V19.3001C43.9167 18.6439 43.3974 18.1143 42.7477 18.1169C41.6555 18.1247 40.3458 18.1376 39.5478 18.1376" fill="#D5FFFA"/>
                      <path opacity="0.4" d="M32.5086 1.46587C31.7362 0.662451 30.3877 1.21528 30.3877 2.3287V9.14095C30.3877 11.9981 32.7411 14.349 35.5983 14.349C37.3989 14.3696 39.8995 14.3748 42.023 14.3696C43.1106 14.367 43.6634 13.0676 42.9091 12.2823C40.1837 9.44837 35.3038 4.36953 32.5086 1.46587" fill="#D5FFFA"/>
                      <path d="M28.2056 33.3062C29.2671 33.3064 30.1293 34.1694 30.1294 35.231C30.1294 36.2926 29.2671 37.1526 28.2056 37.1528H14.1411C13.0795 37.1526 12.2192 36.2926 12.2192 35.231C12.2193 34.1694 13.0796 33.3064 14.1411 33.3062H28.2056ZM22.8862 20.4048C23.9478 20.405 24.8101 21.268 24.8101 22.3296C24.8099 23.3911 23.9477 24.2512 22.8862 24.2515H14.1411C13.0795 24.2514 12.2194 23.3912 12.2192 22.3296C12.2192 21.2679 13.0794 20.4049 14.1411 20.4048H22.8862Z" fill="#D5FFFA"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 -mr-8">
              <div className="bg-white rounded-[32px] p-10 text-black max-w-2xl">
                <span className="bg-[#082421] text-[#D5FFFA] px-4 py-2 rounded-full text-[20px] font-bold leading-[100%] text-center inline-block mb-6">Client Acquisition</span>
                <h3 className="text-[36px] font-bold mb-6 leading-tight">Sharable Booking Profile</h3>
                <p className="text-[18px] font-medium leading-[140%] text-black">
                  Eliminate the back-and-forth of scheduling. You get a professional, sharable profile link that showcases your expertise and real-time availability, allowing existing and potential clients to book sessions with you instantly and securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Command Center Section */}
      <section className="pt-12 pb-16 bg-white overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-8">
          <div className="flex justify-between items-center gap-16">
            <div className="flex-1 -ml-8">
              <div className="bg-white rounded-[32px] p-10 text-black max-w-2xl">
                <span className="bg-[#F9E141] text-[#082421] px-4 py-2 rounded-full text-[20px] font-bold leading-[100%] text-center inline-block mb-6">Automation</span>
                <h3 className="text-[36px] font-bold mb-6 leading-tight">Appointment Command<br />Center & Reminders</h3>
                <p className="text-[18px] font-medium leading-[140%] text-black">
                  Reduce no-shows and keep your day running smoothly. Manage all upcoming sessions from a single view where the system automatically handles the busy work of sending timely appointment reminders to your clients on your behalf.
                </p>
              </div>
            </div>
            <div className="flex-1 -mr-8 relative">
              <div className="absolute top-0 right-[8%] -translate-y-1/2 w-24 h-24 rounded-full bg-[#2D454233] flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-[#D5FFFA] flex items-center justify-center">
                  <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M35.4017 12.3811C34.6584 12.1509 33.8673 12.3249 33.2918 12.8424L31.3468 14.5807C30.6273 15.2227 30.3384 16.2084 30.5911 17.1514L32.9634 26.0052C33.2161 26.9482 33.9588 27.6558 34.9037 27.8552L37.4553 28.3869C37.8025 28.4624 38.1491 28.4504 38.4754 28.363C38.867 28.2581 39.2258 28.043 39.5151 27.7326C40.0441 27.1632 40.2382 26.3696 40.0351 25.6115L36.9129 13.9596C36.7098 13.2015 36.145 12.6113 35.4017 12.3811Z" fill="#082421"/>
                    <path d="M26.2024 35.2736L17.4115 37.6291C13.7355 38.6141 10.4898 36.7671 9.51753 33.1383L6.72033 22.6991C5.74761 19.0688 7.63537 15.848 11.3114 14.863L20.1022 12.5075C23.7782 11.5225 27.0235 13.368 27.9962 16.9982L30.7934 27.4375C31.7657 31.0662 29.8784 34.2886 26.2024 35.2736Z" fill="#082421"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <img src="/4 7589.png" alt="Appointment Command Center" className="w-full rounded-l-xl" />
                <div className="absolute bottom-0 left-1/2 -translate-x-[calc(50%+90px)] translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-[#FFDE3633] flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#F9E141] flex items-center justify-center">
                      <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M56.8332 30.9998C56.8332 45.2702 45.2676 56.8332 30.9998 56.8332C16.7321 56.8332 5.1665 45.2702 5.1665 30.9998C5.1665 16.7347 16.7321 5.1665 30.9998 5.1665C45.2676 5.1665 56.8332 16.7347 56.8332 30.9998Z" fill="#082421"/>
                        <path d="M40.2319 40.8539C39.8935 40.8539 39.5525 40.766 39.2399 40.5826L29.0977 34.5325C28.5139 34.1811 28.1548 33.5482 28.1548 32.8662V19.8281C28.1548 18.7586 29.0228 17.8906 30.0923 17.8906C31.1618 17.8906 32.0298 18.7586 32.0298 19.8281V31.7657L41.2265 37.2501C42.1435 37.8004 42.4458 38.9887 41.8981 39.9084C41.5339 40.5155 40.8906 40.8539 40.2319 40.8539Z" fill="#082421"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Tech Control Center Section */}
      <section className="pt-12 pb-16 bg-white overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-8">
          <div className="flex justify-between items-center gap-16">
            <div className="flex-1 -ml-8 relative">
              <div className="absolute top-0 right-[calc(10%-15px)] -translate-y-1/2 w-24 h-24 rounded-full bg-[#FFDE3633] flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-[#F9E141] flex items-center justify-center">
                  <svg width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M3.66699 20.3105C3.75866 24.5969 4.01533 31.9284 4.05199 32.7369C4.18216 34.4657 4.84399 36.2129 5.87433 37.4449C7.30799 39.1737 9.07349 39.9455 11.5357 39.9455C14.9383 39.9639 18.6893 39.9639 22.3322 39.9639C25.9897 39.9639 29.539 39.9639 32.5365 39.9455C34.9638 39.9455 36.7843 39.1535 38.1997 37.4449C39.23 36.2129 39.8918 34.4474 39.9853 32.7369C40.022 32.0567 40.2053 24.0982 40.3153 20.3105H3.66699Z" fill="#082421"/>
                    <path d="M20.6162 28.2046V30.5769C20.6162 31.3359 21.2322 31.9519 21.9912 31.9519C22.7502 31.9519 23.3662 31.3359 23.3662 30.5769V28.2046C23.3662 27.4456 22.7502 26.8296 21.9912 26.8296C21.2322 26.8296 20.6162 27.4456 20.6162 28.2046Z" fill="#082421"/>
                    <path d="M24.3584 3.66748C27.1099 3.66768 29.3661 5.73726 29.7109 8.39893H33.3359C37.184 8.39899 40.3153 11.5305 40.3154 15.3804V21.7349C40.3154 22.1968 40.0823 22.6275 39.6992 22.8823C35.9189 25.3848 31.4307 27.0518 26.7227 27.7026C26.6586 27.7118 26.5964 27.7153 26.5342 27.7153C25.9127 27.7153 25.357 27.2952 25.2012 26.6792C24.8308 25.2202 23.5056 24.1989 21.9824 24.1987C20.4388 24.1987 19.1277 25.1983 18.7207 26.687C18.5373 27.3524 17.8971 27.7777 17.2041 27.686C12.5274 27.0334 8.05808 25.3738 4.28516 22.8823C3.89832 22.6293 3.66699 22.1969 3.66699 21.7349V15.3804C3.66714 11.5305 6.80596 8.39893 10.665 8.39893H14.2705C14.6153 5.73718 16.8706 3.66763 19.624 3.66748H24.3584ZM19.624 6.41748C18.3904 6.41762 17.3598 7.26065 17.0518 8.39893H26.9287C26.6207 7.26068 25.5901 6.41767 24.3584 6.41748H19.624Z" fill="#082421"/>
                  </svg>
                </div>
              </div>
              <img src="/6 333899.png" alt="Zero-Tech Control Center" className="w-full rounded-r-xl" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-[#C5D5D3] flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#0A2E2A] flex items-center justify-center">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M22.6874 35.9053H7.89248C6.01999 35.9053 4.5 37.3986 4.5 39.2383C4.5 41.0755 6.01999 42.5712 7.89248 42.5712H22.6874C24.5599 42.5712 26.0799 41.0755 26.0799 39.2383C26.0799 37.3986 24.5599 35.9053 22.6874 35.9053Z" fill="#D5FFFA"/>
                      <path opacity="0.4" d="M49.5002 14.3515C49.5002 12.5143 47.9802 11.021 46.1103 11.021H31.3153C29.4428 11.021 27.9229 12.5143 27.9229 14.3515C27.9229 16.1912 29.4428 17.6845 31.3153 17.6845H46.1103C47.9802 17.6845 49.5002 16.1912 49.5002 14.3515Z" fill="#D5FFFA"/>
                      <path d="M19.9749 14.3518C19.9749 18.5518 16.5124 21.956 12.2375 21.956C7.96498 21.956 4.5 18.5518 4.5 14.3518C4.5 10.1542 7.96498 6.75 12.2375 6.75C16.5124 6.75 19.9749 10.1542 19.9749 14.3518Z" fill="#D5FFFA"/>
                      <path d="M49.4998 39.1482C49.4998 43.3457 46.0373 46.7499 41.7624 46.7499C37.4899 46.7499 34.0249 43.3457 34.0249 39.1482C34.0249 34.9482 37.4899 31.5439 41.7624 31.5439C46.0373 31.5439 49.4998 34.9482 49.4998 39.1482Z" fill="#D5FFFA"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 -mr-8">
              <div className="bg-white rounded-[32px] p-10 text-black max-w-2xl">
                <span className="bg-[#D5FFFA] text-[#082421] px-4 py-2 rounded-full text-[20px] font-bold leading-[100%] text-center inline-block mb-6">Ease of Use</span>
                <h3 className="text-[36px] font-bold mb-6 leading-tight">Zero-Tech Control Center</h3>
                <p className="text-[18px] font-medium leading-[140%] text-black">
                  You are a therapist, not an IT manager. MelloMinds is designed with a "No-Code" philosophy, giving you a centralized dashboard that is intuitive and easy to navigate, allowing you to operate your entire digital practice without any technical knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Support Those Who Focus on Healing Section - Bottom */}
      <section className="py-20 bg-[#FFDE36]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-[45px] font-bold leading-[120%] mb-6 text-black">
              We Support Those<br />
              Who Focus on Healing
            </h2>
            <p className="text-[25px] font-bold italic leading-[120%] max-w-4xl mx-auto">
              <span className="text-[#08242199]">mellominds is built for therapists</span> <span className="text-[#082421]">"who want to spend their time treating clients, not managing paperwork. If you value patient care over administrative burdens"</span><span className="text-[#08242199]">, this platform is for you.</span>
            </p>
          </div>
          
          <div className="flex items-start justify-center gap-8">
            <div className="bg-[#FFFFFF] rounded-2xl border-2 border-[#00000033] p-10 flex flex-col w-[369px] h-[579px] mt-24">
              <div className="mb-8 flex justify-center">
                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M55.9995 70.812C76.2464 70.812 93.3335 74.102 93.3335 86.7954C93.3334 99.4935 76.1344 102.667 55.9995 102.667C35.7574 102.666 18.6665 99.3765 18.6665 86.6831C18.6667 73.9852 35.8649 70.812 55.9995 70.812ZM55.9995 9.3335C69.7153 9.3335 80.7055 20.3188 80.7056 34.0249C80.7056 47.731 69.7153 58.7212 55.9995 58.7212C42.2885 58.721 31.2944 47.7309 31.2944 34.0249C31.2945 20.319 42.2886 9.33367 55.9995 9.3335Z" fill="#082421"/>
                </svg>
              </div>
              <h3 className="text-[25px] font-bold leading-[100%] text-[#082421] text-center mb-14 whitespace-nowrap">Independent Practitioners</h3>
              <p className="text-[18px] font-bold leading-[100%] text-[#082421] text-center mb-10">Your All-in-One Digital Assistant</p>
              <p className="text-[18px] font-medium leading-[100%] text-[#082421] text-center">
                Run your entire private practice from a single dashboard without the need for administrative staff. From booking to billing, get the operational support of a full clinic while maintaining the freedom of a solo career.
              </p>
            </div>

            <div className="bg-[#D5FFFA] rounded-2xl border-2 border-[#00000033] p-10 flex flex-col w-[369px] h-[579px] mt-[60px]">
              <div className="mb-8 flex justify-center">
                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M55.7623 67.8511C71.7744 67.8511 85.4469 70.3901 85.4469 80.5483C85.4467 90.7022 71.862 93.3335 55.7623 93.3335C39.7501 93.3335 26.0777 90.7942 26.0777 80.6401C26.0782 70.4823 39.6626 67.8511 55.7623 67.8511ZM30.6393 61.7358C30.7312 61.7484 30.7774 61.8162 30.7857 61.854C30.7983 61.917 30.7728 62.0094 30.6559 62.0767C27.8225 63.4848 16.8878 69.6084 18.2623 82.519C18.3208 83.0821 17.8784 83.5614 17.3229 83.4819C14.6319 83.0953 7.70803 81.5988 5.56016 76.938C4.36927 74.4709 4.36927 71.6131 5.56016 69.146C6.96416 66.141 10.3485 64.0732 15.5006 63.0562C17.9367 62.4636 24.5136 61.6224 30.6393 61.7358ZM81.3639 61.7349C87.4854 61.6214 94.0668 62.4613 96.4986 63.0581C101.651 64.071 105.039 66.1392 106.443 69.144C107.63 71.6111 107.63 74.4732 106.443 76.936C104.295 81.597 97.3713 83.0933 94.6803 83.48C94.1248 83.5638 93.6776 83.0807 93.7359 82.522C95.1106 69.6069 84.1764 63.4828 81.3473 62.0747C81.2263 62.0118 81.2011 61.9158 81.2135 61.8569C81.2218 61.8149 81.2719 61.7475 81.3639 61.7349ZM55.7623 18.6665C66.6639 18.6666 75.4057 27.4503 75.4059 38.4194C75.4059 49.3845 66.664 58.1771 55.7623 58.1772C44.8605 58.1772 36.1187 49.3846 36.1187 38.4194C36.1189 27.4502 44.8606 18.6665 55.7623 18.6665ZM29.568 21.9604C30.7126 21.9605 31.8071 22.0818 32.8766 22.3003C33.0186 22.3339 33.1777 22.4057 33.2613 22.5317C33.3574 22.6914 33.2864 22.9057 33.1861 23.0444C30.023 27.5036 28.2008 32.9423 28.2008 38.7759C28.2008 44.3656 29.8686 49.573 32.7936 53.9019C33.0942 54.3473 32.8269 54.9479 32.2965 55.0405C31.5611 55.1708 30.8085 55.2383 30.0396 55.2593C22.3721 55.461 15.4897 50.4975 13.5885 43.0249C10.768 31.9252 19.038 21.9604 29.568 21.9604ZM82.4293 21.9604C92.9591 21.9606 101.228 31.9254 98.4117 43.0249C96.5105 50.4974 89.629 55.4608 81.9615 55.2593C81.1927 55.2383 80.4359 55.1676 79.7047 55.0415C79.174 54.949 78.9068 54.3474 79.2076 53.9019C82.1325 49.573 83.7994 44.3655 83.7994 38.7759C83.7993 32.9427 81.978 27.5044 78.815 23.0454C78.7148 22.9068 78.6397 22.6924 78.7398 22.5327C78.8234 22.4025 78.9775 22.3349 79.1236 22.3013C80.1892 22.0827 81.2844 21.9604 82.4293 21.9604Z" fill="#082421"/>
                </svg>
              </div>
              <h3 className="text-[25px] font-bold leading-[100%] text-[#082421] text-center mb-8">Small Clinics & Group Practices</h3>
              <p className="text-[18px] font-bold leading-[100%] text-[#082421] text-center mb-6">Unified Management for Diverse Services</p>
              <p className="text-[18px] font-medium leading-[100%] text-[#082421] text-center">
                Scale your operations without the chaos. Utilize our multi-resource calendar to manage distinct schedules for different services, like individual therapy, couples counseling, and assessments. All under one roof.
              </p>
            </div>

            <div className="bg-[#FFED90] rounded-2xl border-2 border-[#00000033] p-10 flex flex-col w-[369px] h-[579px] mt-[30px]">
              <div className="mb-8 flex justify-center">
                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M55.7623 67.8511C71.7744 67.8511 85.4469 70.3901 85.4469 80.5483C85.4467 90.7022 71.862 93.3335 55.7623 93.3335C39.7501 93.3335 26.0777 90.7942 26.0777 80.6401C26.0782 70.4823 39.6626 67.8511 55.7623 67.8511ZM30.6393 61.7358C30.7312 61.7484 30.7774 61.8162 30.7857 61.854C30.7983 61.917 30.7728 62.0094 30.6559 62.0767C27.8225 63.4848 16.8878 69.6084 18.2623 82.519C18.3208 83.0821 17.8784 83.5614 17.3229 83.4819C14.6319 83.0953 7.70803 81.5988 5.56016 76.938C4.36927 74.4709 4.36927 71.6131 5.56016 69.146C6.96416 66.141 10.3485 64.0732 15.5006 63.0562C17.9367 62.4636 24.5136 61.6224 30.6393 61.7358ZM81.3639 61.7349C87.4854 61.6214 94.0668 62.4613 96.4986 63.0581C101.651 64.071 105.039 66.1392 106.443 69.144C107.63 71.6111 107.63 74.4732 106.443 76.936C104.295 81.597 97.3713 83.0933 94.6803 83.48C94.1248 83.5638 93.6776 83.0807 93.7359 82.522C95.1106 69.6069 84.1764 63.4828 81.3473 62.0747C81.2263 62.0118 81.2011 61.9158 81.2135 61.8569C81.2218 61.8149 81.2719 61.7475 81.3639 61.7349ZM55.7623 18.6665C66.6639 18.6666 75.4057 27.4503 75.4059 38.4194C75.4059 49.3845 66.664 58.1771 55.7623 58.1772C44.8605 58.1772 36.1187 49.3846 36.1187 38.4194C36.1189 27.4502 44.8606 18.6665 55.7623 18.6665ZM29.568 21.9604C30.7126 21.9605 31.8071 22.0818 32.8766 22.3003C33.0186 22.3339 33.1777 22.4057 33.2613 22.5317C33.3574 22.6914 33.2864 22.9057 33.1861 23.0444C30.023 27.5036 28.2008 32.9423 28.2008 38.7759C28.2008 44.3656 29.8686 49.573 32.7936 53.9019C33.0942 54.3473 32.8269 54.9479 32.2965 55.0405C31.5611 55.1708 30.8085 55.2383 30.0396 55.2593C22.3721 55.461 15.4897 50.4975 13.5885 43.0249C10.768 31.9252 19.038 21.9604 29.568 21.9604ZM82.4293 21.9604C92.9591 21.9606 101.228 31.9254 98.4117 43.0249C96.5105 50.4974 89.629 55.4608 81.9615 55.2593C81.1927 55.2383 80.4359 55.1676 79.7047 55.0415C79.174 54.949 78.9068 54.3474 79.2076 53.9019C82.1325 49.573 83.7994 44.3655 83.7994 38.7759C83.7993 32.9427 81.978 27.5044 78.815 23.0454C78.7148 22.9068 78.6397 22.6924 78.7398 22.5327C78.8234 22.4025 78.9775 22.3349 79.1236 22.3013C80.1892 22.0827 81.2844 21.9604 82.4293 21.9604Z" fill="#082421"/>
                </svg>
              </div>
              <h3 className="text-[25px] font-bold leading-[100%] text-[#082421] text-center mb-8">Specialized Care Providers</h3>
              <p className="text-[18px] font-bold leading-[100%] text-[#082421] text-center mb-6">Workflows That Adapt to Your Niche</p>
              <p className="text-[18px] font-medium leading-[100%] text-[#082421] text-center">
                Whether you focus on ADHD, trauma, or family systems, MelloMinds adapts to you. Use our custom note templates and activity engines to build a practice that honors your specific therapeutic approach, rather than forcing you into a generic box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Compliance Section */}
      <section className="py-20 bg-[#082421]">
        <div className="max-w-7xl mx-auto px-8 pt-20 pb-20">
          <div className="text-center mb-28">
            <h2 className="text-[45px] font-bold leading-[100%] mb-16 text-[#D5FFFA]">
              Global Compliance.<br />
              Uncompromising Security.
            </h2>
            <p className="text-[25px] font-bold leading-[130%] max-w-4xl mx-auto">
              <span className="text-[#D5FFFA99]">we don't just meet industry standards:</span> <span className="text-[#D5FFFA]">we exceed them.<br />MelloMinds is engineered to align with the world's most<br />rigorous privacy frameworks</span>
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-8">
            <div className="bg-white rounded-2xl w-[180px] h-[80px]"></div>
            <div className="bg-white rounded-2xl w-[180px] h-[80px]"></div>
            <div className="bg-white rounded-2xl w-[180px] h-[80px]"></div>
            <div className="bg-white rounded-2xl w-[180px] h-[80px]"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-start mb-32">
            <div className="flex items-center gap-2">
              <span className="text-[25px] font-bold text-[#082421]">Say</span>
              <span className="text-[25px]">👋</span>
              <span className="text-[25px] font-bold text-[#082421]">hello to <span className="text-[#08242199]">mello!</span></span>
            </div>
            <div className="flex gap-20">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Features</a>
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Resources</a>
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Pricing</a>
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Contact Us</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Research</a>
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Usage Policy</a>
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Refund Policy</a>
                <a href="#" className="text-[#082421] text-[18px] font-semibold leading-[100%]">Other Policy</a>
              </div>
            </div>
          </div>
          
          <div className="mb-16 relative">
            <img src="/Clip path group.svg" alt="Smiley" className="absolute top-[35px] left-[540px] w-[97px] h-[97px] z-0" />
            <img src="/Group 2 11.svg" alt="MelloMinds Logo" className="w-[690px] h-[220px] relative z-10" />
          </div>
          
          <div className="flex justify-between items-center border-t-2 border-[#00000033] pt-8">
            <p className="text-[18px] leading-[100%] text-center">
              <span className="text-[#082421] font-extrabold">© 2026 MelloMinds LLP.</span>
              <span className="text-[#08242199] font-bold"> All rights reserved.</span>
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#082421B2] text-[18px] font-bold leading-[100%] text-center">Privacy Policy | Terms & Conditions</a>
              <div className="flex gap-4">
                <a href="#" className="text-[#082421]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_422_2767)">
                      <path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="black"/>
                      <path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="black"/>
                      <path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_422_2767">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="text-[#082421]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_422_2766)">
                      <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="black"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_422_2766">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="#" className="text-[#082421]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20L1.40583 14.8642C0.538332 13.3608 0.0824998 11.6567 0.0833332 9.90917C0.0858331 4.44583 4.53166 0 9.99414 0C12.645 0.000833333 15.1333 1.03333 17.005 2.90667C18.8758 4.78 19.9058 7.27 19.905 9.91833C19.9025 15.3825 15.4566 19.8283 9.99414 19.8283C8.33581 19.8275 6.70165 19.4117 5.25415 18.6217L0 20ZM5.49749 16.8275C6.89415 17.6567 8.22748 18.1533 9.99081 18.1542C14.5308 18.1542 18.2291 14.4592 18.2316 9.91667C18.2333 5.365 14.5525 1.675 9.99748 1.67333C5.45415 1.67333 1.75833 5.36833 1.75666 9.91C1.75583 11.7642 2.29916 13.1525 3.21166 14.605L2.37916 17.645L5.49749 16.8275ZM14.9866 12.2742C14.925 12.1708 14.76 12.1092 14.5116 11.985C14.2641 11.8608 13.0466 11.2617 12.8191 11.1792C12.5925 11.0967 12.4275 11.055 12.2616 11.3033C12.0966 11.5508 11.6216 12.1092 11.4775 12.2742C11.3333 12.4392 11.1883 12.46 10.9408 12.3358C10.6933 12.2117 9.89498 11.9508 8.94915 11.1067C8.21331 10.45 7.71582 9.63917 7.57165 9.39083C7.42748 9.14333 7.55665 9.00917 7.67998 8.88583C7.79165 8.775 7.92748 8.59667 8.05165 8.45167C8.17748 8.30833 8.21832 8.205 8.30165 8.03917C8.38415 7.87417 8.34332 7.72917 8.28082 7.605C8.21832 7.48167 7.72332 6.2625 7.51748 5.76667C7.31582 5.28417 7.11165 5.34917 6.95998 5.34167L6.48499 5.33333C6.31999 5.33333 6.05165 5.395 5.82499 5.64333C5.59832 5.89167 4.95832 6.49 4.95832 7.70917C4.95832 8.92833 5.84582 10.1058 5.96915 10.2708C6.09332 10.4358 7.71498 12.9375 10.1991 14.01C10.79 14.265 11.2516 14.4175 11.6108 14.5317C12.2041 14.72 12.7441 14.6933 13.1708 14.63C13.6466 14.5592 14.6358 14.0308 14.8425 13.4525C15.0491 12.8733 15.0491 12.3775 14.9866 12.2742Z" fill="black"/>
                  </svg>
                </a>
                <a href="#" className="text-[#082421]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.8008 6C19.8008 6 19.6055 4.62109 19.0039 4.01563C18.2422 3.21875 17.3906 3.21484 17 3.16797C14.2031 2.96484 10.0039 2.96484 10.0039 2.96484H9.99609C9.99609 2.96484 5.79687 2.96484 3 3.16797C2.60938 3.21484 1.75781 3.21875 0.996094 4.01563C0.394531 4.62109 0.203125 6 0.203125 6C0.203125 6 0 7.62109 0 9.23828V10.7539C0 12.3711 0.199219 13.9922 0.199219 13.9922C0.199219 13.9922 0.394531 15.3711 0.992187 15.9766C1.75391 16.7734 2.75391 16.7461 3.19922 16.832C4.80078 16.9844 10 17.0313 10 17.0313C10 17.0313 14.2031 17.0234 17 16.8242C17.3906 16.7773 18.2422 16.7734 19.0039 15.9766C19.6055 15.3711 19.8008 13.9922 19.8008 13.9922C19.8008 13.9922 20 12.375 20 10.7539V9.23828C20 7.62109 19.8008 6 19.8008 6ZM7.93359 12.5938V6.97266L13.3359 9.79297L7.93359 12.5938Z" fill="black"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
