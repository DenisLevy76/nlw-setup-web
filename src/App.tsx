import { HeaderComponent } from './components/HeaderComponent'
import { SummaryTable } from './components/SummaryTable'

export const App = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl flex flex-col px-6 gap-16'>
        <HeaderComponent />
        <SummaryTable />
      </div>
    </div>
  )
}
