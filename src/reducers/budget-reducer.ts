import { v4 as uuidv4 } from "uuid"
import { DraftExpense, Expense } from "../types"

export type BudgetActions = 
    {type: "add-budget", payload: {budget: number}} |
    {type: "show-modal"} | 
    {type: "hide-modal"} |
    {type: "add-expense", payload: {expense: DraftExpense}} |
    {type: "delete-expense", payload: {id : Expense["id"]}} |
    {type: "get-expense-by-id", payload: {id : Expense["id"]}}

export type BudgetState = {
    budget: number
    modal: boolean
    expenses: Expense[]
    editingId: Expense["id"]
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false,
    expenses: [],
    editingId: ""
}

const createExpenseId = (draftExpense : DraftExpense) : Expense => {
    return {
        ...draftExpense,
        id: uuidv4()
    }
}

export const budgetReducer = (
    state : BudgetState = initialState,
    action : BudgetActions      
    ) => {

    if(action.type === "add-budget") {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === "show-modal"){
        return{
            ...state,
            modal: true
        }
    }

    if(action.type === "hide-modal"){
        return{
            ...state,
            modal: false
        }
    }

    if(action.type === "add-expense"){

        const expense = createExpenseId(action.payload.expense)

        return{
            ...state,
            expenses: [...state.expenses, expense],
            modal: false
        }
    }

    if(action.type === "delete-expense"){

        const updatedExpenses = state.expenses.filter( expense => expense.id !== action.payload.id)

        return{
            ...state,
            expenses: updatedExpenses
        }
    }

    if(action.type === "get-expense-by-id"){
        return {
            ...state,
            editingId: action.payload.id,
            modal: true 
        }
    }
    return state
}