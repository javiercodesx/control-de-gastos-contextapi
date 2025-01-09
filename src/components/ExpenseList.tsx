import { useMemo } from "react"
import useBudget from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {

    const { state } = useBudget()

    const filteredExpenses = state.currenyCategory ? state.expenses.filter( expense => expense.category === state.currenyCategory) : state.expenses
    
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])

    return (
        <div className="mt-10 space-y-2">
            {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold mt-5">Listado de gastos</p>
                    <p className="font-light pb-5">Arrastra el gasto hacia la derecha si quieres actualizarlo, o hacia la izquierda si lo deseas eliminar</p>
                     {filteredExpenses.map(expense => (
                        <ExpenseDetails
                            key={expense.id}
                            expense={expense}
                        />
                     ))}
                </>
            )}
        </div>
    )
}
