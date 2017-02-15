<?php
/**
 * Enable JQuery
 */
add_action( 'wp_enqueue_scripts', function(){
	wp_enqueue_script( 'jquery' );
//	wp_register_style( 'load-next-post', get_template_directory_uri() . '/css/load-next-post.css' );
//	wp_enqueue_style( 'load-next-post' );
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

/**
 * API Endpoints
 */

include_once 'api.php';

?>
