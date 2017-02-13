<?php
/**
 * Enable JQuery
 */
add_action( 'wp_enqueue_scripts', function(){
	wp_enqueue_script( 'jquery' );
	wp_register_style( 'load-next-post', get_template_directory_uri() . '/css/load-next-post.css' );
	wp_enqueue_style( 'load-next-post' );
} );

/**
 * Enable Featured Images
 */
add_theme_support( 'post-thumbnails' );

/**
 * Customize Read More Button
 */
add_filter( 'the_content_more_link', function(){
	return '...<p></p><a class="button-article" href="' . get_permalink() . '">Read more</a>';
} );

/**
 * Metabox Blog Entry Summary
 */

function blog_entry_summary_get_meta( $value ) {
	global $post;

	$field = get_post_meta( $post->ID, $value, true );
	if ( ! empty( $field ) ) {
		return is_array( $field ) ? stripslashes_deep( $field ) : stripslashes( wp_kses_decode_entities( $field ) );
	} else {
		return false;
	}
}

function blog_entry_summary_add_meta_box() {
	add_meta_box(
		'blog_entry_summary-blog-entry-summary',
		__( 'Blog Entry Summary', 'blog_entry_summary' ),
		'blog_entry_summary_html',
		'post',
		'normal',
		'default'
	);
}
add_action( 'add_meta_boxes', 'blog_entry_summary_add_meta_box' );

function blog_entry_summary_html( $post) {
	wp_nonce_field( '_blog_entry_summary_nonce', 'blog_entry_summary_nonce' ); ?>

	<p>
		<label for="blog_entry_summary_highlighted_text"><?php _e( 'Highlighted Text', 'blog_entry_summary' ); ?></label><br>
		<textarea name="blog_entry_summary_highlighted_text" id="blog_entry_summary_highlighted_text" ><?php echo blog_entry_summary_get_meta( 'blog_entry_summary_highlighted_text' ); ?></textarea>

	</p><?php
}

function blog_entry_summary_save( $post_id ) {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
	if ( ! isset( $_POST['blog_entry_summary_nonce'] ) || ! wp_verify_nonce( $_POST['blog_entry_summary_nonce'], '_blog_entry_summary_nonce' ) ) return;
	if ( ! current_user_can( 'edit_post', $post_id ) ) return;

	if ( isset( $_POST['blog_entry_summary_highlighted_text'] ) )
		update_post_meta( $post_id, 'blog_entry_summary_highlighted_text', esc_attr( $_POST['blog_entry_summary_highlighted_text'] ) );
}
add_action( 'save_post', 'blog_entry_summary_save' );

/**
 * AJAX Post Loader
 */
function my_ajax_load_next_post () {
	global $post;
    $post_id = intval($_POST['post_id']);
    $post_author = $_POST['post_author'];
	$args = array(
		'post_type'=> 'post',
		'post_status' => 'publish',
		'meta_key' => 'blog_split_author_name',
		'meta_value' => $post_author
    );
	$lastposts = get_posts( $args );
	$last_id = 0;
	if (count($lastposts) > 1) :
		foreach ( $lastposts as $post ) :
			if  ($post_id == $last_id) :
				setup_postdata( $post );
				?>

				<div class="article-separator"></div>

				<article style="margin: 40px 0" <?php post_class(); ?> id="<?php echo $post->ID; ?>">

				    <h2 class="subtitle text-uppercase"><?php echo blog_subtitle_get_meta( 'blog_subtitle_text' ); ?></h2>
				    <h1 class="title"><a href="<?php the_permalink(); ?>" class="title"><?php the_title(); ?></a></h1>

				    <header class="entry-meta">

				        <span class="entry-date"><?php echo get_the_date(); ?></span>
				        <div class="clearfix"></div>
				        <span class="entry-tags">

				                <?php $cats = get_the_category(); foreach ( $cats as $cat ): if ($cat->name != 'Uncategorized') : ?>

				                <a href="<?php echo get_category_link($cat->cat_ID); ?>"><?php echo ucfirst(str_replace('agnez-', '', $cat->name)); ?></a>

				            <?php endif; endforeach; ?>
				        </span>

				    </header>

				    <?php $summary_highlight = blog_entry_summary_get_meta( 'blog_entry_summary_highlighted_text' ); ?>
				    <?php if (!empty($summary_highlight)): ?>
				    <div class="entry-summary">
				        <h3><?php echo $summary_highlight; ?></h3>
				    </div>
				    <?php endif; ?>

				    <figure style="margin-left: 0">
				         <?php if ( has_post_thumbnail() ) : ?>
				            <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
				                <?php the_post_thumbnail(); ?>
				            </a>
				        <?php endif; ?>
				    </figure>

				    <div class="entry-summary">
				        <p class="text-thin"><?php the_content(); ?></p>
				    </div>

				</article>

				<?php
		 	endif;
			$last_id = $post->ID;
		endforeach;
		wp_reset_postdata();
	endif;
}

add_action ( 'wp_ajax_nopriv_load-next-post', 'my_ajax_load_next_post' );
add_action ( 'wp_ajax_load-next-post', 'my_ajax_load_next_post' );

function my_ajax_load_next_post_by_category () {
	global $post;
    $this_cat_name = $_POST['cat_name'];
    $post_id = intval($_POST['post_id']);
	$args = array(
		'category_name' => $this_cat_name,
		'post_type' => 'post',
		'post_status' => 'publish'
    );
	$lastposts = get_posts( $args );
	$last_id = 0;
	if (count($lastposts) > 1) :
		foreach ( $lastposts as $post ) :
			if  ($post_id == $last_id) :
				setup_postdata( $post );
				?>

				<div class="article-separator"></div>

				<article class="post-by-category" style="margin: 40px 0" <?php post_class(); ?> id="<?php echo $post->ID; ?>">

				    <h2 class="subtitle text-uppercase"><?php echo blog_subtitle_get_meta( 'blog_subtitle_text' ); ?></h2>
				    <h1 class="title"><a href="<?php the_permalink(); ?>" class="title"><?php the_title(); ?></a></h1>

				    <header class="entry-meta">

				        <span class="entry-date"><?php echo get_the_date(); ?></span>
				        <div class="clearfix"></div>
				        <span class="entry-tags">

				                <?php $cats = get_the_category(); foreach ( $cats as $cat ): if ($cat->name != 'Uncategorized') : ?>

				                <a href="<?php echo get_category_link($cat->cat_ID); ?>"><?php echo ucfirst(str_replace('agnez-', '', $cat->name)); ?></a>

				            <?php endif; endforeach; ?>
				        </span>

				    </header>

				    <?php $summary_highlight = blog_entry_summary_get_meta( 'blog_entry_summary_highlighted_text' ); ?>
				    <?php if (!empty($summary_highlight)): ?>
				    <div class="entry-summary">
				        <h3><?php echo $summary_highlight; ?></h3>
				    </div>
				    <?php endif; ?>

				    <figure style="margin-left: 0">
				         <?php if ( has_post_thumbnail() ) : ?>
				            <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>">
				                <?php the_post_thumbnail(); ?>
				            </a>
				        <?php endif; ?>
				    </figure>

				    <div class="entry-summary">
				        <p class="text-thin"><?php the_content(); ?></p>
				    </div>

				</article>

				<?php
		 	endif;
			$last_id = $post->ID;
		endforeach;
		wp_reset_postdata();
	endif;
}

add_action ( 'wp_ajax_nopriv_load-next-post-by-category', 'my_ajax_load_next_post_by_category' );
add_action ( 'wp_ajax_load-next-post-by-category', 'my_ajax_load_next_post_by_category' );
