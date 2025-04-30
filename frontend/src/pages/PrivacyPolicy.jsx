import React, { useEffect, useState } from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';


const PrivacyPolicy = () => {

  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const toc = document.getElementById('table-of-contents');
      if (toc) {
        const tocPosition = toc.getBoundingClientRect().top;
        setShowButton(tocPosition < -50); // Show button after scrolling past TOC
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTOC = () => {
    const toc = document.getElementById('table-of-contents');
    if (toc) {
      toc.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-12 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto space-y-6 text-gray-800">


      {/* ----- Privacy Policy ----- */}
      <h1 className="text-5xl font-bold text-gymmate text-center">Privacy Policy</h1>
      <hr className="mt-1 mb-2 h-1 w-16 bg-blue-300 border-0 mx-auto" />
      <p className="text-sm font-medium text-gray-600">Last updated on April 22nd, 2025</p>


      {/* ----- GymMate General Information ----- */}
      <p>
        This Privacy Notice for GymMate (<strong>'we', 'us', or 'our'</strong>), describes how and why we might access,
        collect, store, use, and/or share (<strong>'process'</strong>) your personal information when you use our services
        (<strong>'Services'</strong>), including when you:
      </p>
      <ul className="list-disc list-inside">
        <li>Visit our website at gymmate.com, or any website of ours that links to this Privacy Notice</li>
        <li>
          Use GymMate. GymMate - Your ultimate fitness companion. Find the best trainers, follow the right
          programs, and achieve your goals—all in one platform. Join us today and take your fitness journey to
          the next level!
        </li>
        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
      </ul>
      <p>
        <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and
        choices. We are responsible for making decisions about how your personal information is processed. If you do not
        agree with our policies and practices, please do not use our Services. If you still have any questions or
        concerns, please contact us at <a href="mailto:gymmate12@gmail.com" className='hover:text-gray-700 hover:font-bold cursor-pointer'>gymmate12@gmail.com</a>.
      </p>


      {/* ----- SUMMARY OF KEY POINTS ----- */}
      <div>
        <h2 className="pt-5 text-2xl text-gymmate font-bold mb-0.5">SUMMARY OF KEY POINTS</h2>
        <hr className="mt-0 h-1 w-12 bg-blue-300 border-0" />
      </div>
        <p className="italic">
          This summary provides key points from our Privacy Notice, but you can find out more details about any of these
          topics by clicking the link following each key point or by using our <a href="#table-of-contents"><strong className="text-blue-600 hover:text-blue-800 hover:text-lg">table of contents</strong></a> below to find the
          section you are looking for.
        </p>
        <ul className="space-y-2">
          <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#first"><span className="text-blue-600 hover:text-blue-800 hover:font-bold">personal information you disclose to us</span></a>.</li>
          <li><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
          <li><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</li>
          <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. Learn more about <a href="#second"><span className="text-blue-600 hover:text-blue-800 hover:font-bold">how we process your information</span></a>.</li>
          <li><strong>In what situations and with which parties do we share personal information?</strong> Learn more about <a href="#third"><span className="text-blue-600 hover:text-blue-800 hover:font-bold">when and with whom we share your personal information</span></a>.</li>
          <li><strong>What are your rights?</strong> Learn more about <a href="#sixth"><span className="text-blue-600 hover:text-blue-800 hover:font-bold">your privacy rights</span></a>.</li>
          <li><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by reading this file until the end or by contacting us.</li>
          <li>Want to learn more about what we do with any information we collect? <a href="#first"><span className="text-blue-600 hover:text-blue-800 hover:font-bold">Review the Privacy Notice in full</span></a>.</li>
        </ul>
      


      {/* ----- TABLE OF CONTENTS ----- */}
      <div>
        <h2 id="table-of-contents" className="pt-5 text-2xl text-gymmate font-bold mt-10">TABLE OF CONTENTS</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>

      <ol className="list-decimal list-inside text-blue-600">
        <li><a href="#first" className="hover:text-blue-800 hover:text-lg hover:font-bold">WHAT INFORMATION DO WE COLLECT?</a></li>
        <li><a href="#second" className="hover:text-blue-800 hover:text-lg hover:font-bold">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
        <li><a href="#third" className="hover:text-blue-800 hover:text-lg hover:font-bold">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
        <li><a href="#fourth" className="hover:text-blue-800 hover:text-lg hover:font-bold">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
        <li><a href="#fifth" className="hover:text-blue-800 hover:text-lg hover:font-bold">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
        <li><a href="#sixth" className="hover:text-blue-800 hover:text-lg hover:font-bold">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
        <li><a href="#seventh" className="hover:text-blue-800 hover:text-lg hover:font-bold">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
        <li><a href="#eigth" className="hover:text-blue-800 hover:text-lg hover:font-bold">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
        <li><a href="#ninth" className="hover:text-blue-800 hover:text-lg hover:font-bold">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
        <li><a href="#tenth" className="hover:text-blue-800 hover:text-lg hover:font-bold">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
      </ol>


      {/* ----- 1. WHAT INFORMATION DO WE COLLECT? ----- */}
      <div>
        <h2 id='first' className="pt-5 text-2xl text-blue-950 font-bold mt-10">1. WHAT INFORMATION DO WE COLLECT?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <h3 className="text-xl font-semibold mt-4">Personal information you disclose to us</h3>
      <p>
        <em><strong>In Short:</strong> We collect personal information that you provide to us.</em>
      </p>
      <p>
        We collect personal information that you voluntarily provide to us when you register on the Services, express an
        interest in obtaining information about us or our products and Services, when you participate in activities on the
        Services, or otherwise when you contact us.
      </p>
      <p>
        <strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context
        of your interactions with us and the Services, the choices you make, and the products and features you use. The
        personal information we collect may include the following:
      </p>
      <ul className="list-disc list-inside">
        <li>names</li>
        <li>email addresses</li>
        <li>job titles</li>
        <li>usernames</li>
        <li>passwords</li>
        <li>billing addresses</li>
        <li>contact or authentication data</li>
      </ul>
      <p>
        <strong>Sensitive Information.</strong> We do not process sensitive information.
      </p>
      <p>
        <strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number.
        All payment data is handled and stored by Stripe and Razorpay. You may find their privacy notice link(s) here: <a target='blank' href="https://stripe.com/privacy" className="text-blue-600 hover:text-blue-800 hover:font-bold">
        https://stripe.com/privacy</a> and <a href="https://razorpay.com/privacy/" target='blank' className="text-blue-600 hover:text-blue-800 hover:font-bold">https://razorpay.com/privacy/</a>. 
      </p>
      <p>
        All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
      </p>
      <h3 className="text-xl font-semibold mt-4">Google API</h3>
      <p>
        Our use of information recieved from Google APIs will adhere to <span className="text-blue-600 hover:text-blue-800 hover:font-bold"><a href="https://developers.google.com/terms/api-services-user-data-policy" target='_blank'>Google API Services User Data Policy</a></span>,
         including the <span className="text-blue-600 hover:text-blue-800 hover:font-bold"><a href="https://developer.chrome.com/docs/webstore/program-policies/limited-use" target='blank'>Limited Use requirements</a></span>.
      </p>


      {/* ----- 2. HOW DO WE PROCESS YOUR INFORMATION? ----- */}
      <div>
        <h2 id='second' className="pt-5 text-2xl text-blue-950 font-bold mt-10">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        <em><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.
        We may also process your information for other purposes with your consent.</em>
      </p>
      <p>
        <strong> We process your personal information for a variety of reasons, depending on how you interact with our Services,
        including:</strong>
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong>
          We may process your information so you can create and log in to your account, as well as keep your account in working order.
        </li>
        <li>
          <strong>To enable user-to-user communications.</strong> We may process your information if you choose to use
          any of our offerings that allow for communication with another user.
        </li>
        <li>
          <strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.
        </li>
        <li>
          <strong>To deliver targeted advertising to you.</strong> We may process your information to develop and display personalised content and advertising tailored to your interests, location, and more.
        </li>
        <li>
          <strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services to better understand how they are being used so we can improve them.
        </li>
        <li>
          <strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.
        </li>
        <li>
          <strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing
          and promotional campaigns that are most relevant to you.
        </li>
      </ul>


      {/* ----- 3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? ----- */}
      <div>
        <h2 id='third' className="pt-5 text-2xl text-blue-950 font-bold mt-10">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        <em><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</em>
      </p>
      <p>
        We may need to share your personal information in the following situations:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company
          assets, financing, or acquisition of all or a portion of our business to another company.
        </li>
        <li>
          <strong>When we use Google Maps Platform APIs.</strong> We may share your information with certain Google Maps Platform APIs (e.g. Google Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to estimate your location.
          GPS is accurate to about 20 meters, while Wi-Fi and cell towers help improve accuracy when GPS signals are weak, like indoors. This data helps Google Maps provide directions, but it is not always
          perfectly precise. You may revoke your consent anytime by contacting us at the contact details provided at the end of this deocument.
        </li>
        <li>
          <strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.
        </li>
        <li>
          <strong>Other Users.</strong> When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services,
          such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. Similarly, other users will be able to view descriptions of your activity,
          communicate with you within the Services, and view your profile.
        </li>
      </ul>


      {/* ----- 4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? ----- */}
      <div>
        <h2 id='fourth' className="pt-5 text-2xl text-blue-950 font-bold mt-10">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        <em><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</em>
      </p>
      <p>
        We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services.
        Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
      </p>
      <p>
        We also permit third parties and service providers to use online tracking technologies on our Servide for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your
        interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your 
        interests which may appear on our Services or other websites and online services.
      </p>
      <p>
        Specific information about how we use such technologies and how you can refuse certain cookies is set out in out Cookie Notice.
      </p>


      {/* ----- 5. HOW LONG DO WE KEEP YOUR INFORMATION? ----- */}
      <div>
        <h2 id='fifth' className="pt-5 text-2xl text-blue-950 font-bold mt-10">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        <em><strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</em>
      </p>
      <p>
        We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
        No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
      </p>
      <p>
        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives),
        then we will securely store your personal information and isolate it from any further processing until deletion is possible.
      </p>


      {/* ----- 6. WHAT ARE YOUR PRIVACY RIGHTS? ----- */}
      <div>
        <h2 id='sixth' className="pt-5 text-2xl text-blue-950 font-bold mt-10">6. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        <em><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em>
      </p>
      <p>
        <strong className='text-decoration-line: underline'>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information,
        which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. 
        You can withdraw your consent at any time by contacting us by using the contact details provided in the section <span className="text-blue-600 hover:text-blue-800 hover:font-bold"><a href="#ninth">'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'</a></span> below.
      </p>
      <p>
        However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allowa, will import PropTypes from 'prop-types'
        affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
      </p>
      <p>
        <strong className='text-decoration-line: underline'>Opting out of marketing and promotional communication:</strong>
        You can unsubrsibe from our marketing and promotional communications at any time by clicking on the unsubrcibe link in the emails that we send, or by
        contacting us using the details provided in the section <span className="text-blue-600 hover:text-blue-800 hover:font-bold"><a href="#ninth">'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'</a></span> below. You will then be removed from the marketing lists.
        However, we may still communicate with you, for example, to send you service-related messages that are necessary for the administration and use of your account,
        to respond to service requests, or for other non-marketing purposes.
      </p>
      <h3 className="text-xl font-semibold mt-4">Account Information</h3>
      <p>
        If you would at any time like to review or change the information in your account or terminate your account, you can:
      </p>
      <ul className="list-disc list-inside">
        <li>Log in to your account settings and update your user account.</li>
      </ul>
      <p>
        Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases.
        However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigation,
        enforce our legal terms and/or comply with applicable legal requirements.
      </p>
      <p>
        <strong className='text-decoration-line: underline'>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default.
        If you prefer, you can usually choose to set your browser to remove cookies and reject cookies.
        If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
      </p>
      <p>
        If you have questions or comments about your privacy rights, you may email us at <a href="mailto:gymmate12@gmail.com" className='hover:text-gray-700 hover:font-bold cursor-pointer'>gymate12@gmail.com</a>
      </p>


      {/* ----- 7. CONTROL FOR DO-NOT TRACK FEATURES ----- */}
      <div>
        <h2 id='seventh' className="pt-5 text-2xl text-blue-950 font-bold mt-10">7. CONTROL FOR DO-NOT TRACK FEATURES</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track feature or setting you can activate to signal your privacy preference not to have data about your
        online browsing activities monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has been finalised.
        As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
        If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
      </p>


      {/* ----- 8. DO WE MAKE UPDATES TO THIS NOTICE? ----- */}
      <div>
        <h2 id='eigth' className="pt-5 text-2xl text-blue-950 font-bold mt-10">8. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        <em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay complaint with relevant laws.</em>
      </p>
      <p>
        We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes
        to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are 
        protecting your information.
      </p>


      {/* ----- 9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? ----- */}
      <div>
        <h2 id='ninth' className="pt-5 text-2xl text-blue-950 font-bold mt-10">9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        If you have questions or comments about this notice, you may contact us by post at:
      </p>
      <p className='space-y-2'>
        <span className="flex items-center gap-2 font-bold text-xl text-gymmate">
          <img src={assets.simple_logo} alt="GymMate Logo" className="w-10 h-10" />
          GymMate
        </span>

        <span className="flex items-center gap-2">
          <Mail size={22} />
          <a
            href="mailto:gymmate12@gmail.com"
            className="hover:text-gray-700 hover:font-bold cursor-pointer font-semibold text-lg"
          >
            gymmate12@gmail.com
          </a>
        </span>

        <span className="flex items-center gap-2 font-semibold text-lg">
          <MapPin size={22} />
          71000 Ankara
        </span>

        <span className="flex items-center gap-2 font-semibold text-lg">
          <img src={assets.turkish_flag} alt="Turkish Flag" className='w-7 h-7'/>
         Turkey
        </span>
      </p>


      {/* ----- 10. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? ----- */}
      <div>
        <h2 id='tenth' className="pt-5 text-2xl text-blue-950 font-bold mt-10">10. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <hr className="h-1 w-12 bg-blue-300 border-0 ml-0" />
      </div>
      <p>
        You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information.
        You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.
        To request to review, update, or delete your personal information, please visit: <span onClick={()=>navigate('/my-profile')} className='hover:text-gray-700 hover:font-bold cursor-pointer'>My Profile</span>.
      </p>
      </div>

      {/* ----- FLOATING ARROW-UP BUTTON ----- */}
      {showButton && (
        <button
          onClick={scrollToTOC}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-5 rounded-full shadow-md hover:bg-blue-700 transition-all"
        >
          <ArrowUp size={24} />
        </button>
      )}

    </div>
  );
};

export default PrivacyPolicy;
