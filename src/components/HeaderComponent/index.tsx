import { Plus } from 'phosphor-react'
import { IMAGES } from '../../settings/imgs'

export const HeaderComponent: React.FC = () => {
  return (
    <header className='w-full flex justify-between items-center max-w-3xl mx-auto'>
      <img src={IMAGES.LogoHabits} />
      <button
        type='button'
        className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-all'
      >
        <Plus
          size={20}
          className='text-violet-500'
        />
        Novo hábito
      </button>
    </header>
  )
}
