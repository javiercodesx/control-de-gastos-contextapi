import { useState } from "react"


export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBudget(+e.target.value)
    }

    return (
      <form className="space-y-5">
          <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-blue-600 font-bold text-center">
              Definir Presupuesto
            </label>
            <input 
              id="budget"
              type="number" 
              className="bg-white border border-gray-200 p-2"
              placeholder="Define tu prespuesto"
              name="budget"
              value={budget}
              onChange={handleChange}
            />
          </div>

          <input 
            type="submit"
            value="Definir Presupuesto"
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-bold uppercase"
          />
      </form>
    )
}
