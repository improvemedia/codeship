require 'json'

class Project
  org_uuid    = '23d3a7f0-e93d-0133-b53e-76bef8d7b14f'
  proj_uuid   = '7ef7f420-c982-0132-2d00-12acee263f11'
  BUILDS_URL  = "https://api.codeship.com/v2/organizations/#{org_uuid}/projects/#{proj_uuid}/builds".freeze
  CREDENTIALS = 'codeship@improvemedia.ru:123qwe123'.freeze

  def working_branches_by_name(name)
    builds.select do |build|
      build['branch'] == name && build['status'] == 'testing'
    end
  end

  def build_first?(branch, commit)
    build = first_working_build_by_branch(branch)
    raise "No branches working with #{branch}" if build.nil?

    build['commit_sha'] == commit
  end

  private

  def builds
    data.fetch('builds')
  end

  def data
    @data || reload!
  end

  def first_working_build_by_branch(name)
    working_branches_by_name(name).min_by { |build| build['started_at'] }
  end

  def reload!
    @data = JSON.parse(`curl -H 'Authorization:#{token}' #{BUILDS_URL}`)
  end

  def token
    payload =
      JSON.parse(
        `curl -X POST --user #{CREDENTIALS} https://api.codeship.com/v2/auth`
      )

    payload.fetch('access_token')
  end
end

branch = ENV.fetch('CI_BRANCH')
commit = ENV.fetch('CI_COMMIT_ID')

raise 'branch undefined' if branch.nil?
raise 'commit undefined' if commit.nil?

proj = Project.new

puts "BRANCH: #{branch}"
puts "COMMIT: #{commit}"
puts proj.working_branches_by_name(branch)

loop do
  break if proj.build_first?(branch, commit)
  puts 'wait'
  sleep 60
  proj.reload!
end

puts 'go!'
