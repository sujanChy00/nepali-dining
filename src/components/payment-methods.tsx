import { CreditCard, QrCode, Smartphone, X } from 'lucide-react'

export const PaymentMethods = () => {
  return (
    <section className="text-center space-y-5">
      <h3 className="font-bold">PAYMENT METHODS</h3>
      <div className="grid gap-4 md:grid-cols-3 max-w-2xl mx-auto">
        <div className="flex flex-col items-center p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <CreditCard className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
          <span className="text-sm font-medium text-green-700 dark:text-green-300">
            Credit Card
          </span>
          <span className="text-xs text-green-600 dark:text-green-400 mt-1">
            Accepted
          </span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
          <div className="relative">
            <Smartphone className="w-8 h-8 text-red-600 dark:text-red-400 mb-2" />
            <X className="w-4 h-4 text-red-600 dark:text-red-400 absolute -top-1 -right-1" />
          </div>
          <span className="text-sm font-medium text-red-700 dark:text-red-300">
            Electronic Money
          </span>
          <span className="text-xs text-red-600 dark:text-red-400 mt-1">
            Not Accepted
          </span>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
          <QrCode className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
          <span className="text-sm font-medium text-green-700 dark:text-green-300">
            QR Code
          </span>
          <span className="text-xs text-green-600 dark:text-green-400 mt-1">
            PayPay Accepted
          </span>
        </div>
      </div>
    </section>
  )
}
