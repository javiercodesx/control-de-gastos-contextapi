import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useBudget from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";


export default function BudgetTracker() {

  const { state, dispatch, totalExpenses, remainingBudget } = useBudget()

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(1)

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            pathColor: percentage === 100 ? '#DC2626' : '#3b82f6',
            trailColor: '#d6d6d6',
            textColor: percentage === 100 ? '#DC2626' : '#3b82f6',
          })}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
    	  <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={() => dispatch({type: "reset-app"})}
        >
          Resetear App
        </button>

        <AmountDisplay
          label="Presupuesto"
          amount={state.budget}
        />
        
        <AmountDisplay
          label="Gastado"
          amount={totalExpenses}
        />
        
        <AmountDisplay
          label="Disponible"
          amount={remainingBudget}
        />

      </div>
    </div>
  )
}
