import { getUsers } from "@/lib/getUsers";
import type { User, UserDetails } from "@/data";
// Mock function to get user by ID
export async function getUserById(id: string) :Promise<UserDetails | null> {
  try {
    const users: User[] = await getUsers();
    console.log("users when I got the users again", users)
    const user = users.find(u  => u.id === parseInt(id));
    console.log("user", user)
    
    if (!user) return null;

    // Generate random data for missing fields
    const [firstName, lastName] = user.username.split(" ");
    
    // Generate 1-3 random guarantors
    const guarantors = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => ({
      firstName: ["Sarah", "Michael", "Emma", "James", "Olivia"][Math.floor(Math.random() * 5)],
      lastName: ["Smith", "Johnson", "Williams", "Brown", "Davis"][Math.floor(Math.random() * 5)],
      phoneNumber: user.phoneNumber,
      email: `${firstName.toLowerCase()}@gmail.com`,
      relationship: ["Sister", "Brother", "Parent", "Uncle", "Aunt"][Math.floor(Math.random() * 5)],
    }));

    return {
      ...user,
      firstName: firstName || "John",
      lastName: lastName || "Doe",
      accountNumber: `LSQ${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      accountBalance: `${Math.floor(Math.random() * 1000000).toLocaleString()}.00`,
      bankName: "Providus Bank",
      bvn: user.phoneNumber,
      gender: Math.random() > 0.5 ? "Male" : "Female",
      maritalStatus: ["Single", "Married", "Divorced"][Math.floor(Math.random() * 3)],
      children: ["None", "1", "2", "3+"][Math.floor(Math.random() * 4)],
      residence: ["Parent's Apartment", "Own Apartment", "Rented Apartment"][Math.floor(Math.random() * 3)],
      education: {
        level: ["B.Sc", "M.Sc", "Ph.D"][Math.floor(Math.random() * 3)],
        employmentStatus: "Employed",
        sector: ["FinTech", "Healthcare", "Education"][Math.floor(Math.random() * 3)],
        duration: `${Math.floor(Math.random() * 10)} years`,
        officeEmail: user.email,
        monthlyIncome: `₦${Math.floor(Math.random() * 1000000).toLocaleString()}.00 - ₦${Math.floor(Math.random() * 1000000).toLocaleString()}.00`,
        loanRepayment: `${Math.floor(Math.random() * 100000).toLocaleString()}`,
      },
      socials: {
        twitter: `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
        facebook: `${firstName} ${lastName}`,
        instagram: `@${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
      },
      guarantor: guarantors, // Array of 1-3 guarantors
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}