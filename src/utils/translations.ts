export const translations = {
  he: {
    // Header
    siteTitle: "BiuReg.com",
    siteSubtitle: "פורטל הרשמה אוניברסיטת בר אילן",
    navigation: {
      home: "בית",
      register: "הרשמה",
      status: "בדיקת סטטוס",
      help: "עזרה"
    },
    
    // Registration Form
    registration: {
      title: "הרשמה לאוניברסיטת בר אילן",
      subtitle: "עיצוב תואר ראשון", 
      stepOf: "שלב {current} מתוך {total}",
      completed: "הושלם",
      
      // Steps
      steps: {
        personal: "פרטים אישיים",
        identity: "פרטי זהות",
        academic: "פרטים אקדמיים",
        documents: "העלאת מסמכים",
        review: "סקירה ושליחה"
      },
      
      // Fields
      fields: {
        firstName: "שם פרטי",
        lastName: "שם משפחה",
        email: "אימייל",
        phone: "טלפון",
        dateOfBirth: "תאריך לידה",
        idNumber: "מספר תעודת זהות",
        learningPath: "מסלול לימודים",
        previousEducation: "השכלה קודמת",
        
        // Learning paths
        learningPaths: {
          BA: "תואר ראשון (BA)",
          MA: "תואר שני (MA)",
          PhD: "תואר שלישי (PhD)",
          Certificate: "תכנית תעודה"
        }
      },
      
      // Placeholders
      placeholders: {
        firstName: "הכנס שם פרטי",
        lastName: "הכנס שם משפחה",
        email: "הכנס כתובת אימייל",
        phone: "הכנס מספר טלפון",
        idNumber: "הכנס מספר תעודת זהות",
        previousEducation: "תאר את ההשכלה הקודמת שלך..."
      },
      
      // Documents
      documents: {
        title: "העלאת מסמכים",
        requirements: "דרישות העלאה:",
        requirementsList: [
          "כל המסמכים חייבים להיות ברורים וקריאים",
          "תמונות חייבות להיות צבעוניות ולהציג את המסמך השלם",
          "גודל קובץ לא יעלה על 10MB לקובץ",
          "פורמטים נתמכים: PDF, JPG, JPEG, PNG"
        ],
        types: {
          id_card: "תעודת זהות",
          passport: "דרכון",
          diploma: "תעודת גמר",
          transcript: "גיליון ציונים אקדמי",
          photo: "תמונה פספורטית",
          other: "מסמכים אחרים"
        },
        upload: "בחר קובץ",
        uploading: "מעלה...",
        uploaded: "✓ הועלה",
        chooseFile: "בחר קובץ",
        supportedFormats: "פורמטים נתמכים: PDF, JPG, JPEG, PNG (מקסימום 10MB)"
      },
      
      // Review
      review: {
        title: "סקירה ושליחה",
        personalInfo: "פרטים אישיים",
        name: "שם:",
        email: "אימייל:",
        phone: "טלפון:",
        dateOfBirth: "תאריך לידה:",
        idNumber: "מספר תעודת זהות:",
        learningPath: "מסלול לימודים:",
        previousEducation: "השכלה קודמת:"
      },
      
      // Buttons
      buttons: {
        previous: "קודם",
        next: "הבא",
        submit: "שלח הרשמה",
        signOut: "התנתק"
      },
      
      // Messages
      messages: {
        submitSuccess: "הרשמה נשלחה בהצלחה! תקבל אימייל אישור בקרוב.",
        submitError: "שגיאה בשליחת הרשמה. נסה שוב.",
        uploadError: "שגיאה בהעלאת קובץ. נסה שוב.",
        welcome: "ברוך הבא,"
      }
    },
    
    // Footer
    footer: {
      university: "אוניברסיטת בר אילן",
      description: "מוסד אקדמי מוביל המחויב למצוינות בחינוך ומחקר.",
      quickLinks: "קישורים מהירים",
      links: {
        admission: "דרישות קבלה",
        programs: "תכניות לימודים",
        campus: "חיי קמפוס",
        contact: "צור קשר"
      },
      support: "תמיכה",
      supportLinks: {
        faq: "שאלות נפוצות",
        technical: "תמיכה טכנית",
        accessibility: "נגישות"
      },
      copyright: "© 2024 אוניברסיטת בר אילן. כל הזכויות שמורות. | פורטל הרשמה BiuReg.com"
    }
  },
  
  en: {
    siteTitle: "BiuReg.com",
    siteSubtitle: "Bar-Ilan University Registration Portal",
    navigation: {
      home: "Home",
      register: "Register",
      status: "Check Status",
      help: "Help"
    },
    registration: {
      title: "Bar-Ilan University Registration",
      subtitle: "Bachelor's Degree Program",
      stepOf: "Step {current} of {total}",
      completed: "completed",
      steps: {
        personal: "Personal Information",
        identity: "Identity Information", 
        academic: "Academic Information",
        documents: "Document Upload",
        review: "Review & Submit"
      },
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone",
        dateOfBirth: "Date of Birth",
        idNumber: "ID Number",
        learningPath: "Learning Path",
        previousEducation: "Previous Education"
      },
      buttons: {
        previous: "Previous",
        next: "Next", 
        submit: "Submit Registration",
        signOut: "Sign Out"
      },
      messages: {
        submitSuccess: "Registration submitted successfully! You will receive a confirmation email shortly.",
        submitError: "Error submitting registration. Please try again.",
        uploadError: "Error uploading file. Please try again.",
        welcome: "Welcome,"
      }
    }
  }
};