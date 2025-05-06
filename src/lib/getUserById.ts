// Mock function to get user by ID
export function getUserById(id: string) {
    // In a real app, you would fetch this data from an API
    return {
      id,
      firstName: "Grace",
      lastName: "Effiom",
      accountNumber: "LSQTf1PF",
      accountBalance: "200,000.00",
      bankName: "Providus Bank",
      phoneNumber: "07060780922",
      email: "grace@lendsqr.com",
      bvn: "07060780922",
      gender: "Female",
      maritalStatus: "Single",
      children: "None",
      residence: "Parent's Apartment",
      education: {
        level: "B.Sc",
        employmentStatus: "Employed",
        sector: "FinTech",
        duration: "2 years",
        officeEmail: "grace@lendsqr.com",
        monthlyIncome: "₦200,000.00 - ₦400,000.00",
        loanRepayment: "40,000",
      },
      socials: {
        twitter: "@grace_effiom",
        facebook: "Grace Effiom",
        instagram: "@grace_effiom",
      },
      guarantor: {
        firstName: "Debby",
        lastName: "Ogana",
        phoneNumber: "07060780922",
        email: "debby@gmail.com",
        relationship: "Sister",
      },
    }
  }