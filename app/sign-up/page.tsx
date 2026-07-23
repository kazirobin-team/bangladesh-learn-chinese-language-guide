"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import Image from "next/image"

const occupations = [
  "Student",
  "Job Holder",
  "Business",
  "Interpreter / Dobhashi",
  "Freelancer / Remote Worker",
  "Housewife",
  "Unemployed",
  "Other",
]

const reasons = [
  "For studies",
  "For career/job",
  "To go to China",
  "For Chinese culture",
  "For business",
  "As a hobby",
  "Other",
]

const levels = [
  "HSK 1 (Basic) - I know very little",
  "HSK 2 (Elementary) - I can understand a little",
  "HSK 3 (Intermediate) - I can speak basic",
  "HSK 4 (Upper-Intermediate) - I'm moderately fluent",
  "HSK 5 (Advanced) - I'm fluent",
  "HSK 6 (Proficient) - I'm very fluent",
  "I haven't taken any test / I don't know",
]

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  wpNumber: z.string().min(10),
  address: z.string().min(2),
  occupation: z.string(),
  whyLearn: z.string(),
  langLevel: z.string(),
})

type FormValues = z.infer<typeof schema>

export default function RegisterPage() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <main className="min-h-screen bg-gray-300 py-10">
      <div className="mx-auto max-w-3xl bg-white shadow-lg">
        {/* Banner */}

        <Image
          src="/assets/banner.jpeg"
          alt=""
          width={1200}
          height={350}
          className="w-full"
        />

        {/* Header */}

        <div className="bg-[#ffe8c6] p-8">
          <h1 className="text-3xl font-bold">
            Active Member Verification Form
          </h1>

          <p className="mt-3 text-gray-700">
            To keep our WhatsApp group clean, active, and valuable for everyone,
            we need to verify our members regularly. Please fill out this short
            form to confirm your active participation.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 p-8"
        >
          {/* Name + Whatsapp */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="font-semibold">Name *</label>

              <input
                {...register("name")}
                placeholder="Enter your full name..."
                className="mt-2 w-full rounded border p-3"
              />

              <p className="text-sm text-red-500">{errors.name?.message}</p>
            </div>

            <div>
              <label className="font-semibold">WhatsApp Number *</label>

              <input
                {...register("wpNumber")}
                placeholder="Enter your WhatsApp number"
                className="mt-2 w-full rounded border p-3"
              />

              <p className="text-sm text-red-500">{errors.wpNumber?.message}</p>
            </div>
          </div>

          {/* Email + Location */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="font-semibold">Email *</label>

              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email address..."
                className="mt-2 w-full rounded border p-3"
              />

              <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>

            <div>
              <label className="font-semibold">Current Location *</label>

              <input
                {...register("address")}
                placeholder="Enter your full location..."
                className="mt-2 w-full rounded border p-3"
              />

              <p className="text-sm text-red-500">{errors.address?.message}</p>
            </div>
          </div>

          {/* Occupation */}

          <div>
            <h2 className="mb-3 font-semibold">
              What is your current occupation?
            </h2>

            <div className="flex flex-wrap gap-3">
              {occupations.map((item) => {
                // eslint-disable-next-line react-hooks/incompatible-library
                const selected = watch("occupation") === item

                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setValue("occupation", item, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      })
                    }
                    className={`rounded border px-5 py-2 transition ${
                      selected
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Why Learn */}

          <div>
            <h2 className="mb-3 font-semibold">
              Why do you want to learn Chinese?
            </h2>

            <div className="flex flex-wrap gap-3">
              {reasons.map((item) => {
                const selected = watch("whyLearn") === item

                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setValue("whyLearn", item, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      })
                    }
                    className={`rounded border px-5 py-2 transition-all duration-200 ${
                      selected
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Language Level */}

          <div>
            <h2 className="mb-3 font-semibold">
              Your Chinese language proficiency level?
            </h2>

            <div className="space-y-3">
              {levels.map((item) => {
                const selected = watch("langLevel") === item

                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() =>
                      setValue("langLevel", item, {
                        shouldValidate: true,
                        shouldDirty: true,
                        shouldTouch: true,
                      })
                    }
                    className={`block w-full rounded border px-5 py-3 text-left transition-all duration-200 ${
                      selected
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            className="rounded bg-orange-600 px-8 py-3 text-white hover:bg-orange-700"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}
