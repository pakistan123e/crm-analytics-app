import React from 'react';
import { Customer, Order, Payment, TransactionType, CompanyProfile, Product, DayOfWeek, CustomerGroup, Visit, User, UserRole, Settlement, PurchaseReturn, SalesmanProductCommission, Expense, SalesTarget, VerificationStatus, OrderStatus, ProductCategory, Supplier, PurchaseOrder, MainInventoryItem, SupplierPayment, SupplierReturn, Bonus, Deal } from './types';

export const INITIAL_USERS: User[] = [
    {
        id: 'owner',
        name: 'Business Owner',
        password: 'admin',
        role: UserRole.OWNER,
        permissions: {
            canEditCompanyProfile: true,
            canManageUsers: true,

            canSetCommissions: true,
            canViewAllData: true,
        }
    },
    {
        id: 'salesman1',
        name: 'John Doe',
        password: 'sales',
        role: UserRole.SALESMAN,
        permissions: {
            canEditCompanyProfile: false,
            canManageUsers: false,
            canSetCommissions: false,
            canViewAllData: false,
        }
    },
    {
        id: 'salesman2',
        name: 'Salman Khan',
        password: 'pasword',
        role: UserRole.SALESMAN,
        permissions: {
            canEditCompanyProfile: false,
            canManageUsers: false,
            canSetCommissions: false,
            canViewAllData: false,
        }
    }
];

export const PROVINCES = ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Gilgit-Baltistan', 'Azad Kashmir'];

export const CITIES_BY_PROVINCE: { [key: string]: string[] } = {
    'Punjab': ['Lahore', 'Faisalabad', 'Rawalpindi', 'Gujranwala', 'Multan', 'Bahawalpur', 'Sargodha', 'Sialkot', 'Sheikhupura', 'Rahim Yar Khan', 'Jhang', 'Dera Ghazi Khan', 'Gujrat', 'Sahiwal', 'Wah Cantonment', 'Kasur', 'Okara', 'Chiniot', 'Kamoke', 'Hafizabad', 'Sadiqabad', 'Burewala', 'Khanewal', 'Muzaffargarh', 'Mandi Bahauddin', 'Jhelum', 'Khanpur', 'Pattoki', 'Haroonabad', 'Gojra', 'Bhalwal', 'Chakwal', 'Toba Tek Singh', 'Vehari', 'Attock', 'Muridke', 'Layyah', 'Daska', 'Pakpattan'],
    'Sindh': ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah (Shaheed Benazirabad)', 'Mirpur Khas', 'Jacobabad', 'Shikarpur', 'Khairpur', 'Tando Adam', 'Umerkot', 'Dadu', 'Tando Allahyar', 'Thatta', 'Badin', 'Ghotki', 'Kashmore', 'Sanghar', 'Tando Muhammad Khan'],
    'KPK': ['Peshawar', 'Mardan', 'Mingora (Swat)', 'Kohat', 'Abbottabad', 'Bannu', 'Swabi', 'Dera Ismail Khan', 'Charsadda', 'Nowshera', 'Mansehra', 'Haripur', 'Timergara', 'Hangu', 'Lakki Marwat', 'Tank', 'Batkhela', 'Karak'],
    'Balochistan': ['Quetta', 'Turbat', 'Khuzdar', 'Hub', 'Gwadar', 'Chaman', 'Sibi', 'Zhob', 'Loralai', 'Kalat', 'Mastung', 'Nushki', 'Pishin', 'Dera Bugti', 'Barkhan'],
    'Gilgit-Baltistan': ['Gilgit', 'Skardu', 'Hunza', 'Ghizer', 'Astore', 'Shigar', 'Nagar', 'Chilas', 'Khaplu', 'Diamer'],
    'Azad Kashmir': ['Muzaffarabad', 'Mirpur', 'Bhimber', 'Kotli', 'Rawalakot', 'Bagh', 'Pallandri', 'Sudhanoti', 'Neelum Valley', 'Haveli'],
};

export const INITIAL_CUSTOMERS: Customer[] = [
  { id: 'CUST-001', salesmanId: 'owner', name: 'Aliza Ahmed', email: 'aliza.a@example.com', phone: '0300-1234567', address: '123 Gulberg, Lahore', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=AlizaAhmed', createdAt: '2024-07-15', isSpecial: true, rating: 5, specialVisitingDay: 'Monday', shopName: 'Aliza\'s Emporium', shopPictureUrl: 'https://picsum.photos/seed/shop1/200', otherPhone: '0333-7654321', cnic: '35202-1234567-1', cnicFrontUrl: '', cnicBackUrl: '', province: 'Punjab', city: 'Lahore', verificationStatus: VerificationStatus.VERIFIED },
  { id: 'CUST-002', salesmanId: 'owner', name: 'Bilal Khan', email: 'bilal.k@example.com', phone: '0321-2345678', address: '456 Clifton, Karachi', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=BilalKhan', createdAt: '2024-07-16', rating: 4, shopName: 'Bilal\'s Builds', shopPictureUrl: 'https://picsum.photos/seed/shop2/200', province: 'Sindh', city: 'Karachi', verificationStatus: VerificationStatus.VERIFIED },
  { id: 'CUST-003', salesmanId: 'salesman1', name: 'Fatima Ali', email: 'fatima.a@example.com', phone: '0345-3456789', address: '789 Hayatabad, Peshawar', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=FatimaAli', createdAt: '2024-07-18', rating: 3, shopName: 'Fatima\'s Corner', shopPictureUrl: 'https://picsum.photos/seed/shop3/200', province: 'KPK', city: 'Peshawar', verificationStatus: VerificationStatus.VERIFIED },
  { id: 'CUST-004', salesmanId: 'salesman1', name: 'Dawood Ibrahim', email: 'dawood.i@example.com', phone: '0312-4567890', address: '1 Jinnah Rd, Quetta', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=DawoodIbrahim', createdAt: '2024-07-19', rating: 4, shopName: 'Dawood\'s Goods', shopPictureUrl: 'https://picsum.photos/seed/shop4/200', province: 'Balochistan', city: 'Quetta', verificationStatus: VerificationStatus.VERIFIED },
  { id: 'CUST-005', salesmanId: 'salesman2', name: 'Sana Javed', email: 'sana.j@example.com', phone: '0301-5678901', address: '5 Peoples Colony, Faisalabad', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=SanaJaved', createdAt: '2024-07-20', rating: 5, shopName: 'Sana\'s Deals', shopPictureUrl: 'https://picsum.photos/seed/shop5/200', province: 'Punjab', city: 'Faisalabad', verificationStatus: VerificationStatus.VERIFIED },
  { id: 'CUST-006', salesmanId: 'salesman2', name: 'Fahad Mustafa', email: 'fahad.m@example.com', phone: '0334-6789012', address: '8 Latifabad, Hyderabad', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=FahadMustafa', createdAt: '2024-07-21', isSpecial: true, rating: 4, specialVisitingDay: 'Tuesday', shopName: 'Fahad\'s Finds', shopPictureUrl: 'https://picsum.photos/seed/shop6/200', province: 'Sindh', city: 'Hyderabad', verificationStatus: VerificationStatus.VERIFIED },
  { id: 'CUST-007', salesmanId: 'salesman1', name: 'Zoya Nasir', email: 'zoya.n@example.com', phone: '0333-1122334', address: 'University Town, Peshawar', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=ZoyaNasir', createdAt: '2024-07-22', rating: 5, shopName: 'Zoya\'s Collection', shopPictureUrl: 'https://picsum.photos/seed/shop7/200', cnic: '17301-9876543-2', otherPhone: '0311-4455667', province: 'KPK', city: 'Peshawar', verificationStatus: VerificationStatus.VERIFIED },
  { id: 'CUST-008', salesmanId: 'owner', name: 'Usman Afzaal', email: 'usman.a@example.com', phone: '0300-9988776', address: 'Model Town, Sialkot', pictureUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=UsmanAfzaal', createdAt: '2024-07-23', rating: 4, isSpecial: true, specialVisitingDay: 'Friday', shopName: 'Usman\'s Sports', shopPictureUrl: 'https://picsum.photos/seed/shop8/200', cnic: '34603-1231231-1', province: 'Punjab', city: 'Sialkot', verificationStatus: VerificationStatus.VERIFIED }
];

export const INITIAL_ORDERS: Order[] = [
  { id: 'ORD-001', salesmanId: 'owner', customerId: 'CUST-001', createdAt: '2024-07-20', items: [{ id: 'ITEM-1', name: 'Premium Widget', price: 25.00, qty: 2, manufacturedDate: '2024-01-10', expiryDate: '2026-01-10', batchNumber: 'PW-0124-A' }, { id: 'ITEM-2', name: 'Standard Gizmo', price: 15.00, qty: 5, manufacturedDate: '2024-02-15', expiryDate: '2025-08-15', batchNumber: 'SG-0224-C' }], paidAmount: 125.00, status: OrderStatus.FULFILLED, fulfilledAt: '2024-07-20', handoverCode: '1234' },
  { id: 'ORD-002', salesmanId: 'owner', customerId: 'CUST-002', createdAt: '2024-07-21', items: [{ id: 'ITEM-3', name: 'Eco-friendly Gadget', price: 45.00, qty: 10, manufacturedDate: '2023-12-20', expiryDate: '2024-12-20', batchNumber: 'EG-1223-B' }], paidAmount: 300.00, status: OrderStatus.FULFILLED, fulfilledAt: '2024-07-21', handoverCode: '5678' },
  { id: 'ORD-003', salesmanId: 'salesman1', customerId: 'CUST-001', createdAt: '2024-07-22', items: [{ id: 'ITEM-1', name: 'Premium Widget', price: 25.00, qty: 10, manufacturedDate: '2024-01-10', expiryDate: '2026-01-10', batchNumber: 'PW-0124-A' }], paidAmount: 150.00, status: OrderStatus.FULFILLED, fulfilledAt: '2024-07-22', handoverCode: '9012' },
  { id: 'ORD-004', salesmanId: 'salesman1', customerId: 'CUST-003', createdAt: '2024-07-23', items: [{ id: 'ITEM-4', name: 'Deluxe Thingamajig', price: 120.00, qty: 2, manufacturedDate: '2024-03-01', expiryDate: '2027-03-01', batchNumber: 'DT-0324-X' }], paidAmount: 240.00, status: OrderStatus.PENDING_FULFILLMENT },
];

export const INITIAL_PAYMENTS: Payment[] = [
    { id: 'PAY-001', salesmanId: 'owner', customerId: 'CUST-001', createdAt: '2024-07-20', detail: 'Payment for ORD-001', type: TransactionType.CREDIT, amount: 125.00, remark: 'Full payment' },
    { id: 'PAY-002', salesmanId: 'owner', customerId: 'CUST-002', createdAt: '2024-07-21', detail: 'Initial deposit for ORD-002', type: TransactionType.CREDIT, amount: 300.00, remark: 'Partial payment' },
    { id: 'PAY-003', salesmanId: 'salesman1', customerId: 'CUST-001', createdAt: '2024-07-22', detail: 'Payment for ORD-003', type: TransactionType.CREDIT, amount: 150.00, remark: 'Partial payment' },
    { id: 'PAY-004', salesmanId: 'salesman1', customerId: 'CUST-003', createdAt: '2024-07-23', detail: 'Payment for ORD-004', type: TransactionType.CREDIT, amount: 240.00, remark: 'Paid via card' },
];

export const INITIAL_PRODUCTS: Product[] = [
  { id: 'PROD-001', name: 'Premium Widget', purchasePrice: 15.00, salePrice: 25.00, commission: 2.5, pictureUrl: 'https://picsum.photos/seed/PROD-001/200', manufacturedDate: '2024-01-10', expiryDate: '2026-01-10', batchNumber: 'PW-0124-A' },
  { id: 'PROD-002', name: 'Standard Gizmo', purchasePrice: 8.00, salePrice: 15.00, commission: 1, pictureUrl: 'https://picsum.photos/seed/PROD-002/200', manufacturedDate: '2024-02-15', expiryDate: '2025-08-15', batchNumber: 'SG-0224-C' },
  { id: 'PROD-003', name: 'Eco-friendly Gadget', purchasePrice: 28.00, salePrice: 45.00, commission: 5, pictureUrl: 'https://picsum.photos/seed/PROD-003/200', manufacturedDate: '2023-12-20', expiryDate: '2024-12-20', batchNumber: 'EG-1223-B' },
  { id: 'PROD-004', name: 'Deluxe Thingamajig', purchasePrice: 75.00, salePrice: 120.00, commission: 10, pictureUrl: 'https://picsum.photos/seed/PROD-004/200', manufacturedDate: '2024-03-01', expiryDate: '2027-03-01', batchNumber: 'DT-0324-X' },
];

export const INITIAL_PRODUCT_CATEGORIES: ProductCategory[] = [];

export const INITIAL_CUSTOMER_GROUPS: CustomerGroup[] = [];
export const INITIAL_VISITS: Visit[] = [];
export const INITIAL_SETTLEMENTS: Settlement[] = [];
export const INITIAL_PURCHASE_RETURNS: PurchaseReturn[] = [];
export const INITIAL_SALESMAN_PRODUCT_COMMISSIONS: SalesmanProductCommission[] = [];
export const INITIAL_EXPENSES: Expense[] = [];
export const INITIAL_SALES_TARGETS: SalesTarget[] = [];
export const INITIAL_BONUSES: Bonus[] = [];
export const INITIAL_DEALS: Deal[] = [];
// --- Supplier Management System Data ---
export const INITIAL_SUPPLIERS: Supplier[] = [];
export const INITIAL_PURCHASE_ORDERS: PurchaseOrder[] = [];
export const INITIAL_SUPPLIER_PAYMENTS: SupplierPayment[] = [];
export const INITIAL_MAIN_INVENTORY: MainInventoryItem[] = [];
export const INITIAL_SUPPLIER_RETURNS: SupplierReturn[] = [];
// --- End of Supplier Management System Data ---


export const DAYS_OF_WEEK: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export const DEFAULT_COMPANY_PROFILE: CompanyProfile = {
    name: 'Your Company',
    contact: '123-456-7890',
    email: 'contact@yourcompany.com',
    address: '123 Business Rd, Suite 100, Cityville',
    logoUrl: '',
    salesmanPermissions: {
        canLogExpenses: true,
        canReceivePayments: true,
        canCreateGroups: true,
    },
    isVerificationRequiredForCredit: true,
    isPersistenceEnabled: true,
    expenseCategories: ['Salesman Bonus', 'Supplier Payments', 'Fuel', 'Travel', 'Meals', 'Supplies', 'Other'],
    salesTargetBonusAmount: 5000,
};


export const ICONS = {
    dashboard: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
    todaysVisits: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
    customers: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-2.253-9.527 9.527 0 0 0-4.121-15.025A9.337 9.337 0 0 0 12 2.25a9.337 9.337 0 0 0-5.625 2.253A9.527 9.527 0 0 0 2.25 17.25c0 1.559.49 3.012 1.375 4.25A9.337 9.337 0 0 0 8.25 19.5a9.38 9.38 0 0 0 2.625-.372M6.375 12.375a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0Zm10.5 0a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0Z" /></svg>,
    groups: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.289 2.72a3 3 0 0 1-4.682-2.72 9.094 9.094 0 0 1 3.741-.479m-4.29 2.98A9.723 9.723 0 0 1 5.625 18c-1.036 0-2.022.166-2.953.462A3.003 3.003 0 0 0 5 21h4.038M15 21h4.038a3 3 0 0 0 2.326-1.038 9.723 9.723 0 0 0-2.953-.462c-.931-.296-1.917-.462-2.953-.462M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>,
    products: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>,
    orders: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" /></svg>,
    payments: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-5.25H21m-9 5.25h9m-9 2.25h9M9 11.25v-2.25c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125v2.25m-6 0h6m-6 0v2.25c0 .621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125-1.125v-2.25m-6 0h6" /></svg>,
    profile: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>,
    add: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>,
    close: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>,
    search: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>,
    ai: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 1-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 1 3.09-3.09L12 5.25l.813 2.846a4.5 4.5 0 0 1 3.09 3.09L18.75 12l-2.846.813a4.5 4.5 0 0 1-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18.25 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.5 13.5h.008v.008h-.008v-.008Z" /></svg>,
    edit: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>,
    trash: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>,
    print: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.061A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.28a2.25 2.25 0 0 1-2.25-2.25V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125-1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" /></svg>,
    logout: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" /></svg>,
    statement: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>,
    star: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" /></svg>,
    starFilled: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" /></svg>,
    starOutline: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>,
    check: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>,
    bell: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>,
    users: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.253 9.527 9.527 0 00-4.121-15.025A9.337 9.337 0 0012 2.25a9.337 9.337 0 00-5.625 2.253A9.527 9.527 0 002.25 17.25c0 1.559.49 3.012 1.375 4.25A9.337 9.337 0 008.25 19.5a9.38 9.38 0 002.625-.372M6.375 12.375a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM17.625 16.5a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z" /></svg>,
    key: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.928-.621 1.482-.621h2.25a2.25 2.25 0 012.25 2.25v2.25m6-6c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" /></svg>,
    fulfillment: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    returns: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691L7.985 5.944m0 0A8.25 8.25 0 0118.015 5.944m0 0h4.992m-4.992 0v4.992m0 0l-3.181-3.183a8.25 8.25 0 00-11.667 0l-3.181 3.183" /></svg>,
    shop: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5A.75.75 0 0114.25 12h.01a.75.75 0 01.75.75v7.5m-3.75 0v-7.5a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v7.5m-3.75 0v-7.5A.75.75 0 016.75 12h.01a.75.75 0 01.75.75v7.5m-3.75 0v-7.5A.75.75 0 013 12h.01a.75.75 0 01.75.75v7.5m-3.75 0v-7.5A.75.75 0 015.25 12h.01a.75.75 0 01.75.75v7.5m-3.75 0v-7.5A.75.75 0 019 12h.01a.75.75 0 01.75.75v7.5m-3.75 0V9.75a3 3 0 013-3h1.372a3 3 0 012.72 1.838l.497.994a3 3 0 002.72 1.838h1.372a3 3 0 013 3v9.75m-18 0h18" /></svg>,
    analytics: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h16.5v13.5A2.25 2.25 0 0117.25 18H6.75A2.25 2.25 0 014.5 15.75V3.75z" /></svg>,
    expenses: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    inventory: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10.5 11.25h3M12 15V3.75m0 0l3.75 3.75M12 3.75L8.25 7.5" /></svg>,
    commission: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    settlement: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" /></svg>,
    info: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    trendingUp: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V3.375" /></svg>,
    trendingDown: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" /></svg>,
    noActivity: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>,
    trophy: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 011.316-5.033 9.75 9.75 0 011.838-3.442 9.75 9.75 0 013.346-2.526 9.75 9.75 0 013.442-1.838A9.75 9.75 0 0118 9.75v.75m-6 9.75v-2.25m0 2.25h3.375M12 21h-3.375m0 0a3 3 0 10-5.625 0 3 3 0 005.625 0zM12 21a3 3 0 115.625 0 3 3 0 01-5.625 0z" /></svg>,
    eye: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    eyeSlashed: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" /></svg>,
    chevronDown: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>,
    verified: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>,
    unverified: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>,
    label: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>,
    category: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>,
    barcode: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 5h1v14h-1zM6.5 5h2v14h-2zM9.5 5h1v14h-1zM11.5 5h2v14h-2zM14.5 5h1v14h-1zM16.5 5h1v14h-1zM18.5 5h2v14h-2z" /></svg>,
    suppliers: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
    gift: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H9.375A2.625 2.625 0 1012 4.875z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v10.125M9.375 11.25v10.125m5.25-10.125v10.125" /></svg>,
};