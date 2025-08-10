import React, { useState } from 'react';
import { HiX, HiCheckCircle } from 'react-icons/hi';
import ContactDetail from '../components/ContactDetail';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showModal = (type, title, message) => {
    setModalState({
      isOpen: true,
      type,
      title,
      message,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: 'success',
      title: '',
      message: '',
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      showModal(
        'error',
        'Missing Information',
        'Please fill in all required fields.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xovlylwq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showModal(
          'success',
          'Message Sent Successfully! 🎉',
          "Thank you for reaching out! I've received your message and will get back to you within 24 hours. Looking forward to discussing your project!"
          // 'I will get back to you soon.'
        );
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        showModal('error', 'Submission Failed', 'Please try again later.');
      }
    } catch {
      showModal('error', 'Network Error', 'Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ruth_Nyankum_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4 font-inter">
            Contact
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ContactDetail handleDownload={handleDownload} />
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>

      {/* Modal */}
      {modalState.isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-inter">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-md w-full mx-4 overflow-hidden animate-in zoom-in-95 duration-200 ">
            <div
              className={`p-6 border-b border-slate-700 ${
                modalState.type === 'success'
                  ? 'bg-green-500/10'
                  : 'bg-red-500/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      modalState.type === 'success'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {modalState.type === 'success' ? (
                      <HiCheckCircle className="w-7 h-7" />
                    ) : (
                      <HiX className="w-7 h-7" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {modalState.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-white transition-colors duration-200 p-1"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-300 leading-relaxed mb-6">
                {modalState.message}
              </p>
              <button
                onClick={closeModal}
                className={`w-full font-semibold py-3 rounded-lg transition-all duration-200 ${
                  modalState.type === 'success'
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                {modalState.type === 'success' ? 'Awesome!' : 'Try Again'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
