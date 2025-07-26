import { Type } from "@google/genai";


export enum UserRole {
  OWNER = 'OWNER',
  SALESMAN = 'SALESMAN',
}

export interface UserPermissions {
  canEditCompanyProfile: boolean;
  canManageUsers: boolean;
  canSetCommissions: boolean;
  canViewAllData: boolean;
}

export interface User {
  id: string; // This will be the login ID
  name: string;
  password: string;
  role: UserRole;
  permissions: UserPermissions;
}


export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export enum VerificationStatus {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
}

export interface Customer {
  id: string;
  salesmanId: string; // Foreign key to User
  name: string;
  email: string;
  phone: string;
  address: string;
  pictureUrl: string;
  createdAt: string;
  isSpecial?: boolean;
  rating?: number;
  specialVisitingDay?: DayOfWeek;
  // New fields
  shopName?: string;
  shopPictureUrl?: string;
  otherPhone?: string;
  cnic?: string;
  cnicFrontUrl?: string;
  cnicBackUrl?: string;
  province?: string;
  city?: string;
  // Verification
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
}

export interface CustomerGroup {
  id:string;
  salesmanId: string; // Foreign key to User
  name:string;
  visitingDay: DayOfWeek;
  customerIds: string[];
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  manufacturedDate?: string;
  expiryDate?: string;
  batchNumber?: string;
}

export enum OrderStatus {
  PENDING_FULFILLMENT = 'PENDING_FULFILLMENT',
  FULFILLED = 'FULFILLED',
}

export interface Order {
  id: string;
  salesmanId: string; // Foreign key to User
  customerId: string;
  createdAt: string;
  items: OrderItem[];
  paidAmount: number;
  visitId?: string;
  // New fields
  status: OrderStatus;
  fulfilledAt?: string; // Date when owner gave items to salesman
  handoverCode?: string; // 4-digit code for handover verification
  // Discount fields
  discountType?: 'amount' | 'percentage';
  discountValue?: number;
}

export enum TransactionType {
  DEBIT = 'DEBIT', // Money going out from customer (e.g. new order) - they owe us
  CREDIT = 'CREDIT', // Money coming in from customer (e.g. payment)
}

export interface Payment {
  id: string;
  salesmanId: string; // Foreign key to User
  customerId: string;
  createdAt: string;
  detail: string;
  type: TransactionType;
  amount: number;
  remark: string;
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  purchasePrice: number;
  salePrice: number;
  commission: number; // Commission per item sold
  pictureUrl?: string;
  manufacturedDate?: string;
  expiryDate?: string;
  batchNumber?: string;
  categoryId?: string;
}

export interface SalesmanProductCommission {
    salesmanId: string;
    productId: string;
    commission: number;
}

export interface Visit {
    id: string;
    salesmanId: string; // Foreign key to User
    customerId: string;
    date: string; // YYYY-MM-DD
    completed: boolean;
    orderId?: string;
}

export interface Settlement {
  id: string;
  salesmanId: string; // Foreign key to User
  createdAt: string;
  amount: number;
  remark?: string;
}

export interface PurchaseReturn {
    id: string;
    orderId: string;
    customerId: string;
    salesmanId: string;
    createdAt: string;
    returnedItems: OrderItem[];
    refundAmount: number;
    notes?: string;
}

export interface InventoryItem {
    productId: string;
    quantity: number;
}

export enum StockRequestStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

export interface StockRequest {
    id: string;
    salesmanId: string;
    createdAt: string;
    status: StockRequestStatus;
    items: InventoryItem[];
    notes?: string;
}

export interface InventoryTransfer {
    id: string;
    salesmanId: string;
    createdAt: string;
    items: InventoryItem[];
    notes?: string;
}


export enum ExpenseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface Expense {
  id: string;
  salesmanId: string;
  createdAt: string;
  category: string;
  amount: number;
  description: string;
  status: ExpenseStatus;
  supplierPaymentId?: string;
  bonusId?: string;
}

// --- Supplier Management System Types ---
export interface Supplier {
    id: string;
    name: string;
    headName?: string;
    contactPerson?: string;
    contactPersonRole?: string;
    phone: string;
    email?: string;
    address?: string;
    category?: string;
    createdAt: string;
    pictureUrl?: string;
    bankName?: string;
    accountTitle?: string;
    accountNumber?: string;
}

export interface PurchaseOrderItem {
    productId: string;
    name: string;
    purchasePrice: number;
    qty: number;
}

export enum PurchaseOrderStatus {
    PENDING = 'PENDING',
    RECEIVED = 'RECEIVED',
}

export interface PurchaseOrder {
    id: string;
    supplierId: string;
    createdAt: string;
    items: PurchaseOrderItem[];
    status: PurchaseOrderStatus;
    notes?: string;
    receivedAt?: string;
}

export type MainInventoryItem = InventoryItem;

export interface SupplierPayment {
    id: string;
    supplierId: string;
    purchaseOrderId: string;
    createdAt: string;
    amount: number;
    paymentMethod: 'Cash' | 'Credit Card' | 'Bank Transfer';
    notes?: string;
}

export type SupplierReturnItem = PurchaseOrderItem;

export interface SupplierReturn {
    id: string;
    purchaseOrderId: string;
    supplierId: string;
    createdAt: string;
    returnedItems: SupplierReturnItem[];
    debitNoteAmount: number; // money we expect back from supplier
    notes?: string;
}

// --- End of Supplier Management System Types ---


// --- Deals and Promotions ---
export interface DealConditionItemGroup {
    productId: string;
    quantity: number;
}

export interface Deal {
    id: string;
    title: string;
    description?: string;
    type: 'SPEND_AMOUNT' | 'BUY_QUANTITY' | 'BUY_ITEM_GROUP';
    // Condition to trigger the deal
    condition: {
        spendAmount?: number; // For SPEND_AMOUNT type
        buyProductId?: string; // For BUY_QUANTITY type
        buyQuantity?: number; // For BUY_QUANTITY type
        buyItemGroup?: DealConditionItemGroup[]; // For BUY_ITEM_GROUP type
    };
    // Reward for the deal
    reward: {
        type: 'DISCOUNT_PERCENTAGE' | 'DISCOUNT_AMOUNT' | 'FREE_ITEM';
        discountPercentage?: number;
        discountAmount?: number;
        freeProductId?: string;
        freeProductQuantity?: number;
    };
    isActive: boolean;
    createdAt: string;
}


export enum Page {
  DASHBOARD = 'DASHBOARD',
  CUSTOMERS = 'CUSTOMERS',
  GROUPS = 'GROUPS',
  PRODUCTS = 'PRODUCTS',
  ORDERS = 'ORDERS',
  PAYMENTS = 'PAYMENTS',
  PROFILE = 'PROFILE',
  USERS = 'USERS',
  FULFILLMENT = 'FULFILLMENT',
  RETURNS = 'RETURNS',
  SHOP = 'SHOP',
  ANALYTICS = 'ANALYTICS',
  EXPENSES = 'EXPENSES',
  INVENTORY = 'INVENTORY',
  SUPPLIERS = 'SUPPLIERS',
  TODAY_DEALS = 'TODAY_DEALS',
}

export interface CompanyProfile {
    name: string;
    contact: string;
    email: string;
    address: string;
    logoUrl: string;
    salesmanPermissions?: {
        canLogExpenses: boolean;
        canReceivePayments: boolean;
        canCreateGroups: boolean;
    };
    isVerificationRequiredForCredit?: boolean;
    isPersistenceEnabled?: boolean;
    expenseCategories?: string[];
    salesTargetBonusAmount?: number;
}

export interface Alert {
    id: string;
    type: 'visit' | 'expense' | 'verification' | 'stockRequest' | 'order' | 'error';
    title: string;
    message: string;
    pictureUrl?: string;
    action: () => void;
}

export interface SalesTarget {
    salesmanId: string;
    month: string; // Format: YYYY-MM
    targetAmount: number;
}

export interface Bonus {
    id: string;
    salesmanId: string;
    month: string; // YYYY-MM
    targetAmount: number;
    achievedAmount: number;
    bonusAmount: number;
    createdAt: string;
}