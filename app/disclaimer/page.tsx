import Link from 'next/link'

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto mt-20 p-8">
      <h1 className="mb-4 text-3xl font-bold">Disclaimer</h1>
      <p className="mb-4 text-lg">
        This application is for educational purposes only and simulates social
        engineering scenarios. It does not engage in real-world hacking or
        phishing activities.
      </p>
      <p className="mb-4 text-lg">
        The information provided in this application is for general knowledge
        and informational purposes only. It does not constitute professional
        advice.
      </p>
      <p className="mb-4 text-lg">
        We strive for accuracy, but we cannot guarantee that the information is
        always up-to-date or error-free. We are not responsible for any actions
        or decisions taken based on the information provided in this
        application.
      </p>
      <p className="mb-4 text-lg">
        By using this application, you acknowledge and agree to these terms and
        conditions.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  )
}

export default DisclaimerPage
