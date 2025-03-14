---
title: Platform Quick-start
---

## 1. Create your account

If you haven't already, create an account at
[OpenFn.org](https://www.openfn.org/signup)

## 2. Log In

After logging into your new account, you will see an overview of your current
projects and the job runs associated with that project. This is called the outer
**Dashboard**. Click on one project to start.

## 3. Review the navigation bar

You should now be looking at the OpenFn User dashboard for a particular project;
review the navigation tabs.

:::info Key Concepts

You should be familiar with most of the key concepts in these tabs from the
[OpenFn Concepts](/documentation/getting-started/terminology) page.

:::

## 4. Check your inbox

Click on the Inbox tab to view messages—receipts of data that was sent to your
project inbox. Click on the Inbox tab.

## 5. Run a job

You should see your first message associated with a "sample job". Click on it.
You can now choose to do the following:

- Edit the message (mainly for the purpose of fixing mistakes in data),
- Manually run the job associated with a filter which has identified your first
  message as a trigger. See the `Current Potential` section for all jobs that
  can be run against this message based on their triggers and the message body.

Click run.

## 6. View the Associated Runs

After running the job, view the run logs in this section below.

- Click into a run to see what happened to the data inside of the message. In
  the logs, you should be able to see the status (success/error) of the run.
- Go to the "Run History" navigation tab to also view every job run log and its
  status.

<!-- TODO: @Jed, how does this fit in with section 3 above? -->

<!-- ## 7. Familiarize yourself with the other tabs

Navigate to **Triggers**. You can see that the sample filter we provided you
required a message to be sent from OpenFn in order to trigger a job run. Click
on the filter to edit it. Click save when you are done.

Navigate to **Jobs**. Here you can:

- You can click to view the job that was run when triggered by the sample filter
  and sample message.
- Click on "Edit Job" to edit the .js file which executes a specific action
  (job).
- Click on the specified filter to change which filter should trigger that job.

Navigate to **Credentials** to edit the destination system you want to connect
to. By default, we have provided credentials to access the Salesforce sandbox
environment.

Navigate to the **Settings** tab to change the project's name, upgrade your
account for more jobs and runs, add collaborators, and transfer project
ownership. -->

## 8. Set up some live data sources

Most modern web applications have a feature that allows you to `push`,
`publish`, or `post` data to another URL when a certain **event** takes place.
This event could be a form submission, mobile payment, patient registration, or
barcode scan submission from a mobile app. The key is that your source
application will notify OpenFn when _something happens_.

1. Go to the "settings" or "administration" page for your source app, and look
   for a `Webhook API`, `Data Forwarding API`, or `Notifications API`. Write to
   the developers of your application if none is provided out of the box.

2. When setting up forwarding, select to send messages in `JSON` to your
   project's `inbox URL`. This is a UUID that serves as your API token. You can
   find and copy your secure inbox URL by clicking on the "copy URL" link in the
   bottom-right corner of the project in question on your
   **[project dashboard](https://www.openfn.org/projects)** page or by using the
   "Copy URL" button on your project's "Inbox" page.

3. Soon you'll see new messages arrive in your **Inbox**.

See [Generic Data Sources](/source-apps.md) for specific instructions for
connecting common applications.
