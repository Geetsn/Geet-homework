class CommentsController < ApplicationController
  before_action :authenticated_user!
  def create
    @post = Post.find params[:post_id]
    @comment = Comment.new params.require(:comment).permit(:body)
    @comment.post = @post
    @comment.user = current_user
    if @comment.save
      redirect_to post_path(@post), status: 303
    else
      @comments = @post.comments.order(created_at: :desc)
      render 'posts/show', status: 303
    end
  rescue => e
    redirect_to root_path, {alert: e.message, status: 303}
  end

  def destroy
    @comment = Comment.find params[:id]
    @comment.destroy
    # @post = Post.find params[:post_id]
    redirect_to post_path(@comment.post), status: 303
  rescue => e
    redirect_to root_path, {alert: e.message, status: 303}
  end
end
